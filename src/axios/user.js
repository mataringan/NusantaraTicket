/*
@ROUTE: /transaction-user
*/

import { AxiosError } from "axios";
import { apiInstance } from "./instance";

export const getTransactionUser = async ({ token, searchDate, searchStatus }) => {
    try {
        const response = await apiInstance.get("/transaction-user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                date: searchDate,
                status: searchStatus,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /transaction-email
*/

export const getTransactionEmail = async ({ token, idTransaction }) => {
    try {
        const response = await apiInstance.post(
            "/email-transaction",
            {
                idTransaction,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};
