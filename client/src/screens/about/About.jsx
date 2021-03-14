import React from 'react';
import { Layout } from '../../components/shared/layouts/Layout';
import './About.css'

export const About = (props) => {
    return (
        <Layout currentUser={props.currentUser}>
             <div className="about-us-container">
        <div className="paragraph">
          <h1 className="about-h1">About Us</h1>
          <p>
            Review driver onn different ridesharing platform. Uber, Lyft, Turo and hyrecar
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-rich"
            src="https://images.unsplash.com/photo-1614091199036-e934784dbf0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fHViZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
        </Layout>
    )
}
