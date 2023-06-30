import React from 'react'
import "./Dashboard.css"
import png3 from "./png3.png"
import { Carousel } from '@mantine/carousel';


function Dashboard() {
  return (
    <>
      <div class="landingpage">

        <div class="box">

          <div class="infobox">
            <p class="infobox-boldtext">
            Discover, Learn, and Grow in our exclusive Academia
            </p>
            <p class="infobox-slimtext">
            “Education without application is just entertainment.”
            </p>
            <div class="infobox-btnwrapper">
              <button class="infobox-explorebtn selected">
                Explore Courses
              </button>
            </div>
          </div>

          <div class="display">
            <img class="display-nft" src={png3} alt="unsplash-OG44d93i-NJk" border="0" />
          </div>

        </div>

        <div class="auction">

          <div class="title">
            <p class="titlebold">Recently Viewed</p>
          </div>

          <div class="nft">

            <div class="courses-container">
              <div class="course">
                <div class="course-preview">
                  <h6>Course</h6>
                  <h2>JavaScript Fundamentals</h2>
                  <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="course-info">
                  <div class="progress-container">
                    <div class="progress"></div>
                    <span class="progress-text">
                      6/9 Challenges
                    </span>
                  </div>
                  <h6>Chapter 4</h6>
                  <h2>Callbacks & Closures</h2>
                  <button class="btn">Continue</button>
                </div>
              </div>
            </div>

            <div class="courses-container">
              <div class="course">
                <div class="course-preview">
                  <h6>Course</h6>
                  <h2>JavaScript Fundamentals</h2>
                  <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="course-info">
                  <div class="progress-container">
                    <div class="progress"></div>
                    <span class="progress-text">
                      6/9 Challenges
                    </span>
                  </div>
                  <h6>Chapter 4</h6>
                  <h2>Callbacks & Closures</h2>
                  <button class="btn">Continue</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="auction">
        <div class="title">
            <p class="titlebold">Recently Viewed</p>
          </div>
          </div>
        <Carousel className='main-wrap'
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >

          <div class="wrap wrap--1">
            <div class="container container--1">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--2">
            <div class="container container--2">
              <p> Reverse</p>
            </div>
          </div>

          <div class="wrap wrap--3">
            <div class="container container--3">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--2">
            <div class="container container--2">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--3">
            <div class="container container--3">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--1">
            <div class="container container--1">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--1">
            <div class="container container--1">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--2">
            <div class="container container--2">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--3">
            <div class="container container--3">
              <p> Normal</p>
            </div>
          </div>

          <div class="wrap wrap--2">
            <div class="container container--2">
              <p> Normal</p>
            </div>
          </div>

        </Carousel>

        <h1>Parallax Tilt Effect Cards</h1>
        <p>Hover over the cards.</p>

        <Carousel className='main-wrap'
          height={350}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

        </Carousel>

        <h1>Parallax Tilt Effect Cards</h1>
        <p>Hover over the cards.</p>

        <Carousel className='main-wrap'
          height={350}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

        </Carousel>

        <h1>Parallax Tilt Effect Cards</h1>
        <p>Hover over the cards.</p>

        <Carousel className='main-wrap'
          height={350}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className='course-container'>
            <div class="course-card">
              <div class="course-image">
                <img src="https://images.unsplash.com/photo-1686903431112-9b426ee61dad?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc1OTY0Njh8&ixlib=rb-4.0.3&q=85" alt="Course Image" />
                <div class="image-overlay1">
                  <a href="#" class="btn">Enroll Now</a>
                </div>
              </div>
              <div class="course-details">
                <h2 class="course-title">Course Title</h2>
                <div class="enrollment-details">
                  <p class="enrolled-started">Enrolled: <span class="start-date">June 1, 2023</span></p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
          </div>

        </Carousel>

        <h1>Parallax Tilt Effect Cards</h1>
        <p>Hover over the cards.</p>

        <section>

          <div class="swiper-wrapper content">

            <div class="swiper-slide card">
              <div class="card-content">
                <div class="image">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" class="card-img" />
                </div>

                <div class="media-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-github"></i>
                </div>

                <div class="name-profession">
                  <span class="name">Mohamed Yousef</span>
                  <span class="profession">Web Developer</span>
                </div>

                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>

                <div class="button">
                  <button class="aboutMe">About Me</button>
                  <button class="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-wrapper content">

            <div class="swiper-slide card">
              <div class="card-content">
                <div class="image">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" class="card-img" />
                </div>

                <div class="media-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-github"></i>
                </div>

                <div class="name-profession">
                  <span class="name">Mohamed Yousef</span>
                  <span class="profession">Web Developer</span>
                </div>

                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>

                <div class="button">
                  <button class="aboutMe">About Me</button>
                  <button class="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-wrapper content">

            <div class="swiper-slide card">
              <div class="card-content">
                <div class="image">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" class="card-img" />
                </div>

                <div class="media-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-github"></i>
                </div>

                <div class="name-profession">
                  <span class="name">Mohamed Yousef</span>
                  <span class="profession">Web Developer</span>
                </div>

                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>

                <div class="button">
                  <button class="aboutMe">About Me</button>
                  <button class="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-wrapper content">

            <div class="swiper-slide card">
              <div class="card-content">
                <div class="image">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" class="card-img" />
                </div>

                <div class="media-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-github"></i>
                </div>

                <div class="name-profession">
                  <span class="name">Mohamed Yousef</span>
                  <span class="profession">Web Developer</span>
                </div>

                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>

                <div class="button">
                  <button class="aboutMe">About Me</button>
                  <button class="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

    </>
  )
}

export default Dashboard