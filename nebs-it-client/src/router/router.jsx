import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NoticeManage from "../component/Dashboard/NoticeManage";
import NoticeForm from "../component/CreateNotice/NoticeForm";
import ErrorPage from "../component/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/notice-board',
                element: <NoticeManage />
            },
            {
                path: '/create-form',
                element: <NoticeForm />
            }
        ]
    }
])