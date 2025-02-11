import { Outlet } from 'react-router-dom';

const Educator = () => {
  return (
    <div>
      <h1>Educator Dashboard</h1>
      <Outlet />  {/* This renders the nested route components */}
    </div>
  );
};

export default Educator;
