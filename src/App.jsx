import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import JobPage, { jobLoader } from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx';

const App = () => {

  // add job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='jobs/:id' element={<JobPage />} loader={jobLoader}/>
        <Route 
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App
