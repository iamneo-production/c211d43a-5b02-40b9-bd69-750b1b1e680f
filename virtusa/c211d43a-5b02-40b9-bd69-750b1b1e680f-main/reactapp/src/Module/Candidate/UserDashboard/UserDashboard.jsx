import {
  Button,
  Col,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
  Tabs
} from '@mantine/core';
import React from 'react';
import NavCandidate from '../../../Components/NavCandidate';
import "./UserDashboard.css";
import { MdCollectionsBookmark, MdLeaderboard, MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


import EnrolledCourse from '../EnrolledCourse/EnrolledCourse';
import UserEvents from "../UserEvents/UserEvents"



const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: MdOutlineMenuBook,
    title: 'Library of Learning Materials',
    description: 'Typically consists of a series of lessons or modules that cover specific topics. ',
  },
  {
    icon:MdSpaceDashboard,
    title: 'Talk to Experts',
    description: 'Connect with industry experts and experienced professionals through our platform',
  },
  {
    icon: MdCollectionsBookmark,
    title: 'Track Yourself',
    description:
      'Keep tabs on your achievements, completed courses, and performance metrics',
  },
  {
    icon: MdLeaderboard,
    title: 'Leaderboard',
    description:
      'Recognizes and rewards top-performing learners and motivation for continuous growth.',
  },
];



function UserDashboard() {

  

  const { classes } = useStyles();

  const handleFeatureClick1 = () => {
    navigate("/Usercourses");
    console.log("Clicked on Feature 1");
  };
  
  const handleFeatureClick2 = () => {
    navigate("#");
    console.log("Clicked on Feature 2");
  };

  const handleFeatureClick3 = () => {
    navigate("#");
    console.log("Clicked on Feature 2");
  };

  const handleFeatureClick4 = () => {
    navigate("/UserLeaderboard");
    console.log("Clicked on Feature 2");
  };


  const items = features.map((feature,index) => (
    <div className='feat' key={feature.title} onClick={() => {
      if (index === 0) {
        handleFeatureClick1();
      } else if (index === 1) {
        handleFeatureClick2();
      } else if (index === 2) {
        handleFeatureClick3();
      } else if (index === 3) {
        handleFeatureClick4();
      }
    }}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'cyan', to: '#060f61' }}
      >
         {/* <feature.icon /> */}
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  const navigate = useNavigate();

  const course = () => {
    navigate('/UserCourses');
  };

  const certify = () => {
    navigate('#');
  };

  // const storedFormData = JSON.parse(localStorage.getItem('formData'));

  return (
    <div>
      <NavCandidate/>
      
      <div className="select">
        <div className={classes.wrapper}>
          <Grid gutter={45}>
            <Col span={12} md={5}>
              <Title className={classes.title} order={2}>
               Skills speak louder than words!
              </Title>
              <Text c="dimmed">
              Start, switch, or advance your career with the courses,
              Professional Certificates, and degrees from world-class universities and companies.
              Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers.
              Access the content you need to develop new skills – and land the job you’ve dreamed of.
              </Text>

              <div className="select-btn">
                <div className="select-btn-1">
                  <Button
                    variant="gradient"
                    gradient={{ deg: 133, from: 'cyan', to: '#060f61' }}
                    size="lg"
                    radius="md"
                    mt="xl"
                    onClick={course}
                  >
                    Course Library
                  </Button>
                </div>

                <div className="select-btn-2">
                  <Button 
                    variant="gradient"
                    gradient={{ deg: 133, from: '#060f61', to: 'cyan' }}
                    size="lg"
                    radius="md"
                    mt="xl"
                    onClick={certify}
                  >
                    Certify
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={12} md={7}>
              <div className="select-grid">
                <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                  {items }
                </SimpleGrid>
              </div>
            </Col>
          </Grid>
        </div>
      </div>

         <div>
         <Tabs defaultValue="MyCourse">
      <Tabs.List  className='sa-tab'> 
        <Tabs.Tab value="MyCourse" className='gallery'>MyCourse</Tabs.Tab>
        
        <Tabs.Tab value="Events" className='gallery'>Events</Tabs.Tab>
        {/* <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab> */}
      </Tabs.List>

      <Tabs.Panel value="MyCourse" pt="xs">
        <EnrolledCourse/>
      </Tabs.Panel>

      <Tabs.Panel value="Events" pt="xs">
        <UserEvents/>
      </Tabs.Panel>

      {/* <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel> */}
    </Tabs>
    </div>
  
       </div>
    


  )
}

export default UserDashboard