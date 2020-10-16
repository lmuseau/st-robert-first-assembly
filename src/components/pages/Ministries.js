import React from 'react'
import '../../App.css'
import './Ministries.css'

export default function Ministries() {
  return (
    <div className='ministries-section ministries'>
      <div className="inner-width">
        <h1 className="section-title">Our Ministries</h1>
        <div className="border"></div>
        <div className="ministries-container">
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-baby"></i>
            </div>
            <h3>Nursery</h3>
            <div className="ministry-title">Myra Grumney</div>
            <div className="ministry-desc">
              Nursery is available for children ages birth – 2 years old.
              Nursery is available during all services and is located downstairs
              in our Children’s Ministry area.
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-school"></i>
            </div>
            <h3>Preschool</h3>
            <div className="ministry-title">Zelda and Cesar Gomez</div>
            <div className="ministry-desc">
              Preschool is available for children 3 years old (and potty trained) –
              Kindergarten. Preschool is located downstairs in our Children’s Ministry area.
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-place-of-worship"></i>
            </div>
            <h3>Children's Church</h3>
            <div className="ministry-title">Chris And Mary Hayes</div>
            <div className="ministry-desc">
              First Kids focuses on teaching our children to love and obey God through the use 
              of curriculum, praise and worship and mentor-ship. We prepare our children to advance 
              and be leaders in our community, our church and for God.
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-fire"></i>
            </div>
            <h3>Ignite Youth</h3>
            <div className="ministry-title">MICHAEL AND SHEREA KELSEY</div>
            <div className="ministry-desc">
              Ignite Youth is for preteens/teens in 6th grade – 12th grade.
              They meet on Wednesday evenings at 6:45pm downstairs.</div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-male"></i>
            </div>
            <h3>Men's Ministry</h3>
            <div className="ministry-title">ERIC COOPER</div>
            <div className="ministry-desc">
              Our Men’s Ministry meets on the second Tuesday of every 
              month here at the church. 
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-female"></i>
            </div>
            <h3>Women's Ministry</h3>
            <div className="ministry-title">CYNDIE MCCAULLEY</div>
            <div className="ministry-desc">
              Women on a Mission meets on the third Tuesday of the month.  Bring a dish to share and come out 
              for a great time of fellowship, worship and a devotion.  We want to grow closer to God together. 
              Our Women’s Ministry is preparing for our 3rd annual Women’s Conference.  Please see the Events 
              tab for more information.
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Relationship Enrichment</h3>
            <div className="ministry-title">TERRY AND LINDA GLICK</div>
            <div className="ministry-desc">
              We all want the same thing, whether our relationship has just begun or we’ve been married for years: 
              We want a healthy, mutually-satisfying relationship with the one we love.  Check us out. We’re confident
              you’ll find something that serves your interests well. Better Marriages exists to serve you as a couple, 
              whatever the stage of your life and relationship.
            </div>
          </div>
          <div className="ministry-box">
            <div className="ministry-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>PTSD Support Group</h3>
            <div className="ministry-title">TERRY GLICK</div>
            <div className="ministry-desc">
              Are you suffering with PTSD?  You don’t have to cope alone!
              We are a group focused on not only the spiritual well being but the mental as well. 
              This group meets the 2nd & 4th Saturdays at the church. 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}