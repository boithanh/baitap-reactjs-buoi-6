import React from 'react'
import { useRoutes } from 'react-router-dom'
import { path } from '../common/path';
import HomeTemplate from '../template/homeTemplate/HomeTemplate';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import TicketMovie from '../components/TicketMovie';

const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: path.homePage,
            element: <HomeTemplate />,
            children: [
                {
                    index: true,
                    element: <TicketMovie />
                }
            ],
        },
        {
            path: path.pageNotFound,
            element: <PageNotFound />
        }
    ]);
    return routes;
}

export default useRouteCustom