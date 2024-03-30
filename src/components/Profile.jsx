import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0e6d1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s; /* Add transition for hover effects */

  &:hover {
    transform: scale(1.02); /* Enlarge on hover */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
  }
`;

const ProfileHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
`;

const ProfileSection = styled.div`
  border: 2px solid #3498db;
  border-radius: 5px;
  padding: 20px;
  background-color: #f2f2f2;
  text-align: center;
`;

const ProfileText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #666;
  line-height: 1.5;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border: 2px solid #3498db;
  transition: transform 0.2s, box-shadow 0.2s; /* Add transition for hover effects */

  &:hover {
    transform: scale(1.1); /* Enlarge on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Shadow effect on hover */
  }
`;

const Profile = () => {
  const profileData = {
    name: 'Nishtha Joshi',
    bio: 'Student | Linkedin CoachIn mentee | Quick Learner',
    edu: 'B.E Information Technology',
    clg: 'Vivekanand Education Society Institute of Technology',
    cgpa: '8.39',
    imgUrl: '/photo.jpg',
  };

  return (
    <ProfileContainer>
      <ProfileHeader>Profile</ProfileHeader>
      <Img src={profileData.imgUrl} alt="profile" />
      <ProfileSection>
        <ProfileText>
          <strong>{profileData.name}</strong>
          <br />
          {profileData.bio}
        </ProfileText>
        <ProfileText>
          <strong>Education</strong>
          <br />
          {profileData.edu}
          <br />
          CGPA: {profileData.cgpa}
          <br />
          {profileData.clg}
        </ProfileText>
      </ProfileSection>
    </ProfileContainer>
  );
};

export default Profile;
