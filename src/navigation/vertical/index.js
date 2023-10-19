import { BookOpen, Table, Grid, Circle, Users, Home, User, BarChart2, TrendingUp, Mail, Airplay, Activity, Eye, AtSign, Gift, Bell } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/merchant/dashboard'
  },
  {
    header: 'Apps & Pages'
  },
  {
    id: 'leads',
    title: 'Leads',
    icon: <User size={20} />,
    navLink: '/merchant/leads'
  },
  {
    id: 'Infinitistatistics',
    title: 'Infiniti Statistics',
    icon: <BarChart2 size={20} />,
    navLink: '/merchant/statistics'
  },
  {
    id: 'Product reviews',
    title: 'Product Reviews',
    icon: <TrendingUp size={20} />,
    children: [

      {
        id: 'product-review',
        title: 'Home',
        icon: <Circle size={20} />,
        navLink: '/merchant/product-review'
      },
      {
        id: 'analytics',
        title: 'Analytics',
        icon: <Circle size={20} />,
        navLink: '/merchant/analytics'
      },
      {
        id: 'reviews',
        title: 'Manage Reviews',
        icon: <Circle size={20} />,
        navLink: '/merchant/reviews'
      },
    ]
  },
  {
    id: 'emailStats',
    title: 'Talk by XIRCLS',
    icon: <Airplay size={20} />,
    children: [
      {
        id: 'analytics2',
        title: 'Home',
        icon: <Circle size={20} />,
        navLink: '/merchant/analytics2'
      },
      {
        id: 'overallStats',
        title: 'Campaign Reports',
        icon: <Circle size={20} />,
        navLink: '/merchant/overall-statistics'
      },
      {
        id: 'emailStats',
        title: 'Email Reports',
        icon: <Circle size={20} />,
        navLink: '/merchant/email-statistics'
      },
      {
        id: 'reports',
        title: 'WhatsApp Reports',
        icon: <Circle size={20} />,
        navLink: '/merchant/reports'
      },
      {
        id: 'consentStats',
        title: 'Consent Stats',
        icon: <Circle size={20} />,
        navLink: '/merchant/consent-statistics'
      },
      {
        id: 'emails',
        title: 'Emails',
        icon: <Circle size={20} />,
        navLink: '/merchant/emails'
      },
      {
        id: 'campaignTemplate',
        title: 'Create Campaign 1',
        icon: <Circle size={20} />,
        navLink: '/merchant/campaign-template'
      },
      {
        id: 'emailKlaviyo',
        title: 'Create Campaign 2',
        icon: <Circle size={20} />,
        navLink: '/merchant/email-klaviyo'
      }
    ]
  },
  {
    id: 'Privilege XIRCLs',
    title: 'Privilege XIRCLS',
    icon: <Gift size={20} />,
    navLink: '',
    children: [
      {
        id: 'hostDashboard',
        title: 'Host Dashboard',
        icon: <Circle size={20} />,
        navLink: '/merchant/hostDashboard'
      },
      {
        id: 'sponsorDashboard',
        title: 'Sponsor Dashboard',
        icon: <Circle size={20} />,
        navLink: '/merchant/sponsorDashboard'
      },
      {
        id: 'sponsorRewards',
        title: 'Sponsor Rewards',
        icon: <Circle size={20} />,
        navLink: '/merchant/sponsorRewards'
      },
      {
        id: 'sponsorRewards-offers',
        title: 'View Offers',
        icon: <Circle size={20} />,
        navLink: '/merchant/sponsorRewards-offers'
      },
      {
        id: 'sponsorRewards-rewards',
        title: 'View Rewards',
        icon: <Circle size={20} />,
        navLink: '/merchant/sponsorRewards-rewards'
      }
    ]
  },
  {
    id: 'referralOffers',
    title: 'Referral ',
    icon: <Gift size={20} />,
    navLink: '',
    children: [
      {
        id: 'home',
        title: 'Home',
        icon: <Circle size={20} />,
        navLink: '/merchant/homeReferral'
      },
      {
        id: 'referralOffers',
        title: 'Referral Offers',
        icon: <Circle size={20} />,
        navLink: '/merchant/referral-offers'
      },
      {
        id: 'ReferralsTable',
        title: 'Referrals Table',
        icon: <Circle size={20} />,
        navLink: '/merchant/ReferralsTable'
      },
      {
        id: 'ReferralsAnalysis',
        title: 'Referrals Analysis',
        icon: <Circle size={20} />,
        navLink: '/merchant/referral_analysis'
      }
    ]
  },

  {
    id: 'recommendation',
    title: 'Recommendation',
    icon: <User size={20} />,
    navLink: '',
    children: [
      {
        id: 'recommendation',
        title: 'Home',
        icon: <Circle size={20} />,
        navLink: '/merchant/recommendation'
      },
      {
        id: 'homepage',
        title: 'Reports',
        icon: <Circle size={20} />,
        navLink: '/merchant/homepageRecommendation'
      }

    ]
  },

  {
    id: 'genderation',
    title: 'Genderation',
    icon: <Users size={20} />,
    children: [
      {
        id: 'gn_users',
        title: 'Users/Customers',
        icon: <Circle size={16} />,
        navLink: '/merchant/gn-users/'
      },
      {
        id: 'gn_reports',
        title: 'Reports',
        icon: <Circle size={16} />,
        navLink: '/merchant/gn-reports/'
      },
      {
        id: 'gn-oh-my-customers',
        title: 'Oh My Customers!',
        icon: <Circle size={16} />,
        navLink: '/merchant/gn-oh-my-customers/'
      },
      {
        id: 'gn-reports-table',
        title: 'Genderation Report!',
        icon: <Circle size={16} />,
        navLink: '/merchant/gn-reports-table/'
      },
      {
        id: 'visitor-page',
        title: 'Visitor Page',
        icon: <Circle size={16} />,
        navLink: '/merchant/visitor-page/'
      }
    ]
  },
  {
    id: 'FlashAccounts',
    title: 'FlashAccounts',
    icon: <Users size={20} />,
    children: [
      {
        id: 'fa_dashboard',
        title: 'Dashboard',
        icon: <Circle size={16} />,
        navLink: '/merchant/fa-dashboard/'
      },
      {
        id: 'fa_rctable',
        title: 'Registered Customers',
        icon: <Circle size={16} />,
        navLink: '/merchant/fa-rctable/'
      },
      {
        id: 'fa_ty',
        title: 'TY',
        icon: <Circle size={16} />,
        navLink: '/merchant/fa-form/'
      }
    ]
  },
  {
    id: 'scrapy',
    title: 'Scrapy',
    icon: <Grid size={20} />,
    navLink: '/merchant/scrapy'
  },
  {
    id: 'popup-notification',
    title: 'Popup NotIfication',
    icon: <Bell size={20} />,
    navLink: '/merchant/popup-notification'
  },
  {
    id: 'Campaign',
    title: 'Campaign',
    icon: <BarChart2 size={20} />,
    navLink: '/merchant/campaign'
  },
  {
    id: 'Rewards',
    title: 'Rewards',
    icon: <BarChart2 size={20} />,
    navLink: '/merchant/rewards'
  },
  {
    id: 'mapro',
    title: 'mapro',
    icon: <BarChart2 size={20} />,
    navLink: '/merchant/mapro'
  },
  {
    id: 'notify',
    title: 'Notify',
    icon: <Circle size={20} />,
    navLink: '/merchant/notify'
  },
  {
    id: 'checkout',
    title: 'Checkout',
    icon: <Circle size={20} />,
    navLink: '/merchant/checkout'
  },
  {
    id: 'offers log',
    title: 'Offers Log',
    icon: <Circle size={20} />,
    navLink: '/merchant/offers-log'
  },
  {
    id: 'sms reports',
    title: 'SMS Reports',
    icon: <Circle size={20} />,
    navLink: '/merchant/sms-reports'
  },
  {
    id: 'host/add-reward/details',
    title: 'Host Rewards Details',
    icon: <Circle size={20} />,
    navLink: '/merchant/host/add-reward/details'
  },
  {
    id: 'host/add-reward/images',
    title: 'Host Reward Images',
    icon: <Circle size={20} />,
    navLink: '/merchant/host/add-reward/images'
  },
  {
    id: 'sponsor/add-reward/budget',
    title: 'Sponsor Reward Budget',
    icon: <Circle size={20} />,
    navLink: '/merchant/sponsor/add-reward/budget'
  },
  {
    id: 'sponsor/add-reward/customerGroup',
    title: 'Sponsor Reward Customer Group',
    icon: <Circle size={20} />,
    navLink: '/merchant/sponsor/add-reward/customerGroup'
  },
  {
    id: 'wizard-modern-vertical',
    title: 'Wizard Modern Vertical',
    icon: <Circle size={20} />,
    navLink: '/merchant/wizard-modern-vertical'
  },
  {
    id: 'referrals',
    title: 'Referrals',
    icon: <Circle size={20} />,
    navLink: '/merchant/referrals/'
  },
  {
    id: 'email-verify',
    title: 'Email Verify',
    icon: <Circle size={20} />,
    navLink: '/merchant/email-verify'
  },
  {
    id: 'referral-dashboard',
    title: 'Referral Dashboard',
    icon: <Circle size={20} />,
    navLink: '/merchant/referral-dashboard'
  },
  {
    id: 'samples-dashboard',
    title: 'Samples Dashboard',
    icon: <Circle size={20} />,
    navLink: '/merchant/samples-dashboard'
  },
  {
    id: 'affiliate-dashboard',
    title: 'Affiliate Dashboard',
    icon: <Circle size={20} />,
    navLink: '/merchant/affiliate-dashboard'
  },
  {
    id: 'Sample Get Started',
    title: 'Sample Get Started',
    icon: <Circle size={20} />,
    navLink: '/merchant/sample/get-started'
  },
  {
    id: 'homepage',
    title: 'Homepage Recommendation',
    icon: <User size={20} />,
    navLink: '/merchant/homepageRecommendation'
  },
  {
    id: 'mainhome',
    title: 'Main Home',
    icon: <User size={20} />,
    navLink: '/merchant/mainhome'
  },
  {
    id: 'timeline',
    title: 'Time Line',
    icon: <User size={20} />,
    navLink: '/merchant/timeline'
  },
  {
    id: 'website-analytics',
    title: 'Website Analytics',
    icon: <User size={20} />,
    navLink: '/merchant/website-analytics'
  }
]
