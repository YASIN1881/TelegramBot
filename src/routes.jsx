import Home from './pages/home/Home';
import Account from './pages/account/Account';
import Plans from './pages/plans/Plans';
import Order from './pages/order/Order';
import Learn from './pages/learn/Learn';
import ProgramTraining from './pages/learn/ProgramTraining';
let routes = [
    {path: '/' , element: <Home/>},
    {path: '/account' , element: <Account/>},
    {path: '/plans' , element: <Plans/>},
    {path: '/order' , element: <Order/>},
    {path: '/learn' , element: <Learn/>},
    {path: '/learn/:name' , element: <ProgramTraining/>}
]

export default routes