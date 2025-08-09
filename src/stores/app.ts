// Utilities
import { defineStore } from 'pinia'
import UserProfile from '@widgets/UserProfile.vue'
import TwitterFeed from '@widgets/TwitterFeed.vue'
import RedditFeed from '@widgets/RedditFeed.vue'
import LatestNews from '@widgets/LatestNews.vue'
import SiteBandwidth from '@widgets/SiteBandwidth.vue'
import DiskSpace from '@widgets/DiskSpace.vue'
import LastMonthRevenue from '@widgets/LastMonthRevenue.vue'
import TotalSubscribers from '@widgets/TotalSubscribers.vue'
import Accordion from '@widgets/Accordion.vue'
import LastRegisteredUser from '@widgets/LastRegisteredUser.vue'
import ServerUptime from '@widgets/ServerUptime.vue'
import LastDaysStats from '@widgets/LastDaysStats.vue'
import GaugeChart from '@widgets/GaugeChart.vue'
import BlockDashboard from '@widgets/BlockDashboard.vue'
import Inbox from '@widgets/Inbox.vue'
import FastContact from '@widgets/FastContact.vue'
import Modal from '@widgets/Modal.vue'

export const useAppStore = defineStore('app', () => {
  const widgets = shallowRef([
    UserProfile,
    TwitterFeed,
    RedditFeed,
    LatestNews,
    SiteBandwidth,
    DiskSpace,
    LastMonthRevenue,
    TotalSubscribers,
    Accordion,
    LastRegisteredUser,
    ServerUptime,
    LastDaysStats,
    GaugeChart,
    BlockDashboard,
    Inbox,
    FastContact,
    Modal,
  ])

  return { widgets }
})
