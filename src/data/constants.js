import {TrendingUp, Users, Brain, BarChart3,  } from 'lucide-react'

export const SCENARIOS_DATA = [
  {
    // icon: user,
    title: 'Talent Retention',
    description: 'HR departments can use the machine learning predictions to identify high-performing employees at risk of attrition. By analyzing factors contributing to employee turnover and predicting performance trends, HR can implement targeted retention strategies, such as personalized career development plans or incentive programs, to retain top talent.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Improvement',
    description: 'Managers and team leaders can leverage the predictions to identify areas where employees may need additional support or training. By understanding performance patterns and potential challenges, managers can provide timely coaching, resources, or skill development opportunities to enhance employee performance and productivity.'
  },
  {
    // icon: settings,
    title: 'Resource Allocation',
    description: 'Organizations can optimize resource allocation by using machine learning predictions to match employees with projects or tasks that align with their strengths and capabilities. This ensures efficient utilization of talent, improves project outcomes, and enhances overall organizational performance.'
  }
]

export const FEATURES_DATA = [
  {
    icon: Brain,
    title: 'Advanced ML Algorithms',
    description: 'Sophisticated machine learning models that analyze performance patterns and predict outcomes with high accuracy.'
  },
  {
    icon: BarChart3,
    title: 'Comprehensive Analytics',
    description: 'Multi-dimensional analysis incorporating performance data, training records, and feedback systems.'
  },
  {
    icon: Users,
    title: 'Talent Management',
    description: 'Strategic workforce optimization through data-driven insights for better resource allocation.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Forecasting',
    description: 'Predictive analytics to identify high performers and potential improvement areas proactively.'
  }
]

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
//   { name: 'Contact', href: '#contact' }
]