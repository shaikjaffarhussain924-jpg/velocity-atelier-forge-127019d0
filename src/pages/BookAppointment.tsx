import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const BookAppointment = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <BookingForm />
      </div>
      <Footer />
    </>
  );
};

export default BookAppointment;
