export const HomePage = () => {
  return <div className="">
    <header className="Header relative z-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-hero.jpg)' }}>
      
      <div className=" Content absolute top-1/2 transform -translate-y-1/2 text-center w-full text-white">
        <h1 className="text-5xl font-bold">Welcome to Aberdeen Veterinary Hospital</h1>
        <p className="mt-4 text-lg">
          We invite new clients and old friends to experience the best healthcare we can provide for their animal companion.
        </p>
        <a href="#services" className="mt-6 inline-block py-3 px-6 bg-transparent border border-white rounded-full hover:bg-white hover:text-black">
          View Our Services →
        </a>
      </div>
    </header>
  </div>;
};
