import { apiInstance } from "./instance";
import { Axios, AxiosError } from "axios";

/*
@ROUTE: /register-user
*/

export const registerUser = async ({ name, email, phone, password, role, token }) => {
    try {
        const response = await apiInstance.post(
            "/register-user",
            {
                name,
                email,
                phone,
                role,
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-all-user
*/

export const getUser = async ({ searchName, searchRole, token }) => {
    try {
        const response = await apiInstance.get("/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                name: searchName,
                role: searchRole,
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
@ROUTE: /get-user-id
*/

export const getUserById = async ({ _id, token }) => {
    try {
        const response = await apiInstance.get(`/user/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
@ROUTE: /update-user-id
*/

export const updateUserById = async ({ _id, name, email, phone, role, token }) => {
    try {
        const response = await apiInstance.put(
            `/user/${_id}`,
            {
                name,
                email,
                phone,
                role,
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

/*
@ROUTE: /delete-user
*/

export const deleteUser = async ({ _id, token }) => {
    try {
        const response = await apiInstance.delete(`/user/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
@ROUTE: /create-destination
*/

export const createDestination = async ({
    name,
    address,
    description,
    openingTime,
    closingTime,
    status,
    date,
    ticketPrice,
    image,
    quota,
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
                date,
                quota,
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-destination
*/

export const getDestination = async (searchName, searchAddress, searchStatus, searchDate) => {
    try {
        const response = await apiInstance.get("/destination", {
            params: {
                name: searchName,
                address: searchAddress,
                status: searchStatus,
                date: searchDate,
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
@ROUTE: /get-destination-admin
*/

export const getDestinationByAdmin = async ({ token }) => {
    try {
        const response = await apiInstance.get("/destination-admin", {
            headers: {
                Authorization: `Bearer ${token}`,
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
@ROUTE: /update-destination
*/

export const updateDestination = async ({
    _id,
    name,
    address,
    description,
    date,
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
                date,
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /information-destination-admin
*/

export const getInformationDestinationAdmin = async ({ token }) => {
    try {
        const response = await apiInstance.get("/information-destination-admin", {
            headers: {
                Authorization: `Bearer ${token}`,
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
@ROUTE: /get-information-destination-id
*/

export const getInformationById = async ({ _id }) => {
    try {
        const response = await apiInstance.get(`/information-destination/${_id}`);
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /get-transaction-admin
 */

export const getTransactionAdmin = async ({ token, searchName, searchDate, searchStatus }) => {
    try {
        const response = await apiInstance.get("/transaction-admin", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                name: searchName,
                date: searchDate,
                status: searchStatus,
            },
        });

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMsg = error?.response?.data?.message;
            // console.log(errorMsg);
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};

/*
@ROUTE: /update-transaction
 */

export const updateTransaction = async ({ _id, name, phone, citizenship, date, quantity, email, status, token }) => {
    try {
        const response = await apiInstance.put(
            `/transaction/${_id}`,
            {
                name,
                phone,
                date,
                citizenship,
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
            const errorMsg = error?.response?.data?.message;
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
            const errorMsg = error?.response?.data?.message;
            throw new Error(errorMsg);
        }
        throw new Error(error.message);
    }
};
