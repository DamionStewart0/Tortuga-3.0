class ApplicationController < ActionController::API

    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

    def encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, SECRET_KEY)
    end
    
    def decode(token)
        decode = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.newdecode
    end

    def authorize_request
        header = request.header['Authorization']
        header = header.split(' ').last if header
        begin
            @decode = decode(header)
            @current_user = User.find(@decode[:id])
        rescue ActiveRecord::RecordNotFound => encode
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e 
            render json: { errors: e.message }, status: :unauthorized
        end
    end
end
