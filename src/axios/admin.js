import { apiInstance } from "./instance";
import { AxiosError } from "axios";

/*
@ROUTE: /register-admin
*/

export const registerAdmin = async ({ name, email, phone, password, token }) => {
    try {
        const response = await apiInstance.post(
            "/register-admin",
            {
                name,
                email,
                phone,
                password,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /create-destination
*/

export const createDestination = async ({
    name,
    address,
    description,
    openingTime,
    closingTime,
    status,
    ticketPrice,
    image,
    token,
}) => {
    try {
        const response = await apiInstance.post(
            "/destination",
            {
                name,
                address,
                description,
                openingTime,
                closingTime,
                status,
                ticketPrice,
                image,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-destination
*/

export const getDestination = async () => {
    try {
        const response = await apiInstance.get("/destination");
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-destination-id
*/

export const getDestinationById = async ({ _id }) => {
    try {
        const response = await apiInstance.get(`/destination/${_id}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /update-destination
*/

export const updateDestination = async ({
    _id,
    name,
    address,
    description,
    openingTime,
    closingTime,
    status,
    ticketPrice,
    image,
    token,
}) => {
    try {
        const response = await apiInstance.put(
            `/destination/${_id}`,
            {
                name,
                address,
                description,
                openingTime,
                closingTime,
                status,
                ticketPrice,
                image,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /delete-destination
*/

export const deleteDestination = async ({ _id, token }) => {
    try {
        const response = await apiInstance.delete(`/destination/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /create-information-destination
*/

export const createInformation = async ({ idDestination, title, description, date, token }) => {
    try {
        const response = await apiInstance.post(
            "/information-destination",
            {
                idDestination,
                title,
                description,
                date,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-information-destination
*/

export const getAllInformationDestination = async () => {
    try {
        const response = await apiInstance.get("/information-destination");
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-information-destination-id
*/

export const getInformationById = async ({ _id }) => {
    try {
        const response = await apiInstance.get(`/information-destination/${_id}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /update-information-destination
*/

export const updateInformationDestination = async ({ _id, idDestination, title, description, date, token }) => {
    try {
        const response = await apiInstance.put(
            `/information-destination/${_id}`,
            {
                idDestination,
                title,
                description,
                date,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /delete-information-destination
*/

export const deleteInformationDestination = async ({ _id, token }) => {
    try {
        const response = await apiInstance.delete(`/information-destination/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /create-booking
 */

export const createBooking = async ({ idDestination, citizenship, name, phone, image, quantity, email, token }) => {
    try {
        const response = await apiInstance.post(
            "/booking",
            {
                idDestination,
                citizenship,
                name,
                phone,
                image,
                quantity,
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-all-transaction
 */

export const getAllTransaction = async ({ token }) => {
    try {
        const response = await apiInstance.get("/transaction", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-transaction-id
 */

export const getTransactionById = async ({ _id, token }) => {
    try {
        const response = await apiInstance.get(`/transaction/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /update-status-transaction
 */

export const updateStatusTransaction = async ({ _id, token }) => {
    try {
        const response = await apiInstance.put(
            "/transaction-status",
            {
                _id,
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
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /update-transaction
 */

export const updateTransaction = async ({ _id, idDestination, name, phone, quantity, email, status, token }) => {
    try {
        const response = await apiInstance.put(
            `/transaction/${_id}`,
            {
                idDestination,
                name,
                phone,
                quantity,
                email,
                status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /delete-transaction
 */

export const deleteTransaction = async ({ _id, token }) => {
    try {
        const response = await apiInstance.delete(`/transaction/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};
