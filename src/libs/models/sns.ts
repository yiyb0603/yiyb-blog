import { IconType } from 'react-icons';
import GithubIcon from '@/components/Common/Icon/SNS/GithubIcon';
import LinkedInIcon from '@/components/Common/Icon/SNS/LinkedInIcon';
import InstagramIcon from '@/components/Common/Icon/SNS/InstagramIcon';
import FacebookIcon from '@/components/Common/Icon/SNS/FacebookIcon';

type SNSInfo = {
  platform: string;
  link: string;
  icon: IconType;
};

export const snsList: SNSInfo[] = [
  {
    platform: 'GitHub',
    link: 'https://github.com/yiyb0603',
    icon: GithubIcon,
  },

  {
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/in/%EC%9A%A9%EB%B9%88-%EA%B6%8C-794578205',
    icon: LinkedInIcon,
  },

  {
    platform: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100010933171210',
    icon: FacebookIcon,
  },

  {
    platform: 'Instagram',
    link: 'https://instagram.com/yiyb0603',
    icon: InstagramIcon,
  },
];
