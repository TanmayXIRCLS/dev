import { lazy } from 'react'
import Demo from '@src/views/dashboard/Demo'
import Report from '@src/views/Report/Report'
import Notification from '@src/views/Notification/Notification'

// infiniti statistics
import Statistics from '@src/views/Statistics/Statistics'

// product reviews
import Analytics from '@src/views/ProductReviews/analytics/Analytics'
import ProductReview from '@src/views/ProductReviews/Product_Review/ProductReview'
import Reviews from '@src/views/ProductReviews/Manage_Reviews/Reviews'
import RatingBasedList from '@src/views/ProductReviews/analytics/RatingBasedList'

// talk by xircls
import Analytics2 from '@src/views/TalkByXIRCLS/Analytics/Analytics'
import OverallStats from '@src/views/TalkByXIRCLS/overall-stats/OverallStats'
import EmailStats from '@src/views/TalkByXIRCLS/email-stats/EmailStats'
import Reports from '@src/views/TalkByXIRCLS/Reports/Reports'
import ConsentStats from '@src/views/TalkByXIRCLS/consent-stats/ConsentStats'
import Emails from '@src/views/TalkByXIRCLS/campaign-emails/Emails'
import CampaignTemplate from '@src/views/TalkByXIRCLS/campaign-template/CampaignTemplate'
import EmailKlaviyo from '@src/views/TalkByXIRCLS/email-klaviyo/EmailKlaviyo'

// privilege xircls
import HostDashboard from '@src/views/Privilege XIRCLS/hostDashboard/HostDashboard'
import SponsorDashboard from '@src/views/Privilege XIRCLS/SponsorDashboard/SponsorDashboard'
import SponsorRewards from '@src/views/Privilege XIRCLS/sponsorRewards/SponsorRewards'
import ViewOffers from '@src/views/Privilege XIRCLS/viewOffers/ViewOffers'
import ViewRewards from '@src/views/Privilege XIRCLS/viewRewards/ViewRewards'
import ReviewPage from '@src/views/Privilege XIRCLS/SponsorDashboard/addReward/ReviewPage'

// referral
import Home from '@src/views/Referrals/dash-home/Home'
import ReferralOffers from '@src/views/Referrals/Referral/ReferralOffers'
import ReferralOffersEdit from '@src/views/Referrals/Referral/ReferralOffersEdit'
import ReferralsTable from '@src/views/dashboard/ReferralsTable'
import Referral_Analysis from '@src/views/Referrals/Referral_analysis/Referral_Analysis'

// recommendation
import Recommendation from '@src/views/Recommendations/recommendation/Recommendation'

// genderation
import GnUsers from '@src/views/Genderation/GnUsers'
import GnReports from '@src/views/Genderation/GnReports'
import GnOMCustomers from '@src/views/Genderation/GnOMCustomers'
import GnReportsTable from '@src/views/Genderation/GnReportsTable'
import VisitorPage from '@src/views/Genderation/VisitorPage'

// flash accounts
import FaDashboard from '@src/views/FlashAccounts/FaDashboard'
import RCTable from '@src/views/FlashAccounts/RCTable'
import Form from '@src/views/FlashAccounts/Form'


import Scrapy from '@src/views/scrapy/Scrapy'
import PopupNotification from '@src/views/popup-notification/PopupNotification'
import Campaign from '@src/views/dashboard/Campaign'
import Rewards from '@src/views/dashboard/Rewards'
import Mapro from '@src/views/dashboard/Mapro'
import { Notify } from '@src/views/Notify/Notify'
import Checkout from '@src/views/Checkout/Checkout'
import OffersLog from '@src/views/offers-log/OffersLog'
import SmsReports from '@src/views/sms-reports/SmsReports'
import AddRewardPageHost from '@src/views/Privilege XIRCLS/hostDashboard/addReward/AddRewardPage'
import RewardImages from '@src/views/Privilege XIRCLS/hostDashboard/addReward/RewardImages'
import AddRewardPageSponsor from '@src/views/Privilege XIRCLS/SponsorDashboard/addReward/AddRewardPage'
import CustomerGroup from '@src/views/Privilege XIRCLS/SponsorDashboard/addReward/CustomerGroup'
import WizardModernVertical from '@src/views/Campaign/Campaign'
import Referrals from '@src/views/dashboard/Referrals'
import EmailVerify from '@src/views/TalkByXIRCLS/campaign-emails/EmailVerify'
import ReferralsDash from '@src/views/referral-dashboard/ReferralDashboard'
import SamplesDashboard from '@src/views/samples-dashboard/SamplesDashboard'
import AffiliateDashboard from '../../views/affiliate-dashboard/AffiliateDashboard'

// import TotalReach from '@src/views/dashboard/TotalReach'
import GetStarted from './../../views/sample/GetStarted';
import SetCondition from './../../views/sample/SetCondition';
import CreateSample from './../../views/sample/CreateSample';
import CampaignOption from '../../views/TalkByXIRCLS/getStarted/createCampaign/CampaignOption'
import SmsCampaign from './../../views/TalkByXIRCLS/getStarted/createCampaign/SmsCampaign';
import HomePageRecommendation from './../../views/HomePageRecommendation/HomePageRecommendation';
import MainHome from './../../views/MainHome/MainHome';
import Timeline from './../../views/TimeLine/Timeline';
import WebsiteAnalytics from './../../views/WebsiteAnalytics/WebsiteAnalytics';

const Dashboard = lazy(() => import('@src/views/dashboard/Dashboard'))
const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/demo',
    element: <Demo />
  },
  {
    path: '/merchant/dashboard/report',
    element: <Report />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  },
  {
    path: '/merchant/statistics',
    element: <Statistics />
  },
  {
    path: '/merchant/product-review',
    element: <ProductReview />
  },
  {
    path: '/merchant/analytics',
    element: <Analytics />
  },
  {
    path: '/merchant/reviews',
    element: <Reviews />
  },
  {
    path: '/merchant/analytics2',
    element: <Analytics2 />
  },
  {
    path: '/merchant/overall-statistics',
    element: <OverallStats />
  },
  {
    path: '/merchant/email-statistics',
    element: <EmailStats />
  },
  {
    path: '/merchant/reports/',
    element: <Reports />
  },
  {
    path: '/merchant/consent-statistics',
    element: <ConsentStats />
  },
  {
    path: '/merchant/emails',
    element: <Emails />
  },
  {
    path: '/merchant/campaign-template',
    element: <CampaignTemplate />
  },
  {
    path: '/merchant/email-klaviyo',
    element: <EmailKlaviyo />
  },
  {
    path: '/merchant/hostDashboard',
    element: <HostDashboard />
  },
  {
    path: '/merchant/sponsorDashboard',
    element: <SponsorDashboard />
  },
  {
    path: '/merchant/sponsorRewards',
    element: <SponsorRewards />
  },
  {
    path: '/merchant/sponsorRewards-offers',
    element: <ViewOffers />
  },
  {
    path: '/merchant/sponsorRewards-rewards',
    element: <ViewRewards />
  },
  {
    path: '/merchant/sponsor/add-reward/review',
    element: <ReviewPage />
  },
  {
    path: '/merchant/homeReferral',
    element: <Home />
  },
  {
    path: '/merchant/referral-offers',
    element: <ReferralOffers />
  },

  // 
  {
    path: '/merchant/rating-based-product-list',
    element: <RatingBasedList />
  },
  {
    path: '/merchant/wizard-modern-vertical',
    element: <WizardModernVertical />
  },
  {
    path: '/merchant/host/add-reward/details',
    element: <AddRewardPageHost />
  },
  {
    path: '/merchant/host/add-reward/images',
    element: <RewardImages />
  },
  {
    path: '/merchant/sponsor/add-reward/budget',
    element: <AddRewardPageSponsor />
  },
  {
    path: '/merchant/sponsor/add-reward/customerGroup',
    element: <CustomerGroup />
  },
  {
    path: '/merchant/campaign/',
    element: <Campaign />
  },
  {
    path: '/merchant/rewards/',
    element: <Rewards />
  },
  {
    path: '/merchant/mapro/',
    element: <Mapro />
  },
  {
    path: '/merchant/referrals/',
    element: <Referrals />
  },
  {
    path: '/merchant/ReferralsTable/',
    element: <ReferralsTable />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  },
  {
    path: '/merchant/notify',
    element: <Notify />
  },
  {
    path: '/merchant/referral_analysis',
    element: <Referral_Analysis />
  },
  {
    path: '/merchant/checkout',
    element: <Checkout />
  },
  {
    path: '/merchant/sms-reports',
    element: <SmsReports />
  },
  {
    path: '/merchant/email-verify',
    element: <EmailVerify />
  },
  {
    path: '/merchant/referral-offers-edit/:offerId',
    element: <ReferralOffersEdit />
  },
  {
    path: '/merchant/referral-dashboard',
    element: <ReferralsDash />
  },
  {
    path: '/merchant/offers-log',
    element: <OffersLog />
  },
  {
    path: '/merchant/popup-notification',
    element: <PopupNotification />
  },
  {
    path: '/merchant/recommendation',
    element: <Recommendation />
  },
  {
    path: '/merchant/homepageRecommendation',
    element: <HomePageRecommendation />
  },
  {
    path: '/merchant/gn-users/',
    element: <GnUsers />
  },
  {
    path: '/merchant/gn-reports/',
    element: <GnReports />
  },
  {
    path: '/merchant/gn-oh-my-customers/',
    element: <GnOMCustomers />
  },
  {
    path: '/merchant/gn-reports-table/',
    element: <GnReportsTable />
  },
  {
    path: '/merchant/visitor-page/',
    element: <VisitorPage />
  },
  {
    path: '/merchant/fa-dashboard/',
    element: <FaDashboard />
  },
  {
    path: '/merchant/fa-form/',
    element: <Form />
  },
  {
    path: '/merchant/fa-rctable/',
    element: <RCTable />
  },
  {
    path: '/merchant/scrapy/',
    element: <Scrapy />
  },
  {
    path: '/merchant/samples-dashboard',
    element: <SamplesDashboard />
  },
  {
    path: '/merchant/affiliate-dashboard',
    element: <AffiliateDashboard />
  },
  {
    path: '/merchant/sample/get-started',
    element: <GetStarted />
  },
  {
    path: '/merchant/sample/get-started/set-conditions',
    element: <SetCondition />
  },
  {
    path: '/merchant/sample/get-started/create-sample',
    element: <CreateSample />
  },
  {
    path: '/merchant/create-campaign',
    element: <CampaignOption />
  },
  {
    path: '/merchant/create-campaign/sms',
    element: <SmsCampaign />
  },
  {
    path: '/merchant/homepageRecommendation',
    element: <HomePageRecommendation />
  },
  {
    path: '/merchant/mainhome',
    element: <MainHome />
  },
  {
    path: '/merchant/website-analytics',
    element: <WebsiteAnalytics />
  },
  {
    path: '/merchant/timeline',
    element: <Timeline />
  }
]

export default Dashboard_Routes
