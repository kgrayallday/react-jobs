import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListings from './components/JobsListings'
import ViewAllJobs from './ViewAllJobs'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards></HomeCards>
      <JobsListings />
      <ViewAllJobs />
    </>
  )
};

export default App
