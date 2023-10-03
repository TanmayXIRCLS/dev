import { lazy } from 'react'
import Emails from '@src/views/campaign-emails/Emails'
import EmailVerify from '@src/views/campaign-emails/EmailVerify'
import CampaignTemplate from '@src/views/campaign-template/CampaignTemplate'
import EmailKlaviyo from '@src/views/email-klaviyo/EmailKlaviyo'
import ReferralOffers from '@src/views/Referral/ReferralOffers'
import ReferralOffersEdit from '@src/views/Referral/ReferralOffersEdit'
import Referrals from '@src/views/referral-dashboard/ReferralDashboard'
import OffersLog from '@src/views/offers-log/OffersLog'
import PopupNotification from '@src/views/popup-notification/PopupNotification'
import GnUsers from '@src/views/Genderation/GnUsers'
import GnReports from '@src/views/Genderation/GnReports'
import GnOMCustomers from '@src/views/Genderation/GnOMCustomers'
import GnReportsTable from '@src/views/Genderation/GnReportsTable'
import VisitorPage from '@src/views/Genderation/VisitorPage'
import FaDashboard from '@src/views/FlashAccounts/FaDashboard'
import Form from '@src/views/FlashAccounts/Form'
import RCTable from '@src/views/FlashAccounts/RCTable'
import Scrapy from '@src/views/scrapy/Scrapy'

const Leads = lazy(() => import('@src/views/Leads/Leads'))
const ProductReview = lazy(() => import('@src/views/Product_Review/ProductReview'))
const Home = lazy(() => import('@src/views/dash-home/Home'))
const Recommendation = lazy(() => import('@src/views/recommendation/Recommendation'))
const HomePageRecommendation = lazy(() => import('@src/views/HomePageRecommendation/HomePageRecommendation'))



const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/emails',
    element: <Emails />
  },
  {
    path: '/merchant/email-verify',
    element: <EmailVerify />
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
    path: '/merchant/referral-offers',
    element: <ReferralOffers />
  },
  {
    path: '/merchant/referral-offers-edit/:offerId',
    element: <ReferralOffersEdit />
  },
  {
    path: '/merchant/referral-dashboard',
    element: <Referrals />
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
    path: '/merchant/product-review',
    element: <ProductReview />
  },
  {
    path: '/merchant/homeReferral',
    element: <Home />
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
  }
]

export default Customers_Routes