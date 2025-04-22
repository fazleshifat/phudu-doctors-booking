import { ToastContainer, toast } from 'react-toastify';


const getStoredBooking = () => {
    const storedBookingSTR = localStorage.getItem('bookedList');

    if (storedBookingSTR) {
        const storedBookigData = JSON.parse(storedBookingSTR);
        return storedBookigData;
    }
    else {
        return [];
    }
}

const addToStoreBooking = (id) => {
    const storedBookigData = getStoredBooking();

    if (storedBookigData.includes(id)) {
        toast.error('Already booked this doctor!', {
            position: "bottom-right",
            autoClose: 5000,
           
            progress: undefined,
            theme: "colored",
            
        });
    }
    else {
        storedBookigData.push(id);
        const data = JSON.stringify(storedBookigData);
        localStorage.setItem('bookedList', data);
        toast.success('Successfully booked the doctor!');
    }
}

export { addToStoreBooking, getStoredBooking }