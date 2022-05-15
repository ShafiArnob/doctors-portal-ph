import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
  return (
    <section style={{
      background:`url(${appointment})`
    }} className='flex justify-center items-center'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-100px]' src={doctor}/>
      </div>
      <div className='flex-1'>
        <h3 className='text-xl text-primary font-bold'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam recusandae totam, ducimus possimus dolorem sit? Est laboriosam mollitia fugit ad deleniti quam vero earum fuga, ab illo ea nostrum, quisquam nemo neque itaque, odit inventore dolores in. Sit, accusamus!
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;