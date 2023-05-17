const ContactLink = () => {
  const handleClick = () => {
    window.location.href = "mailto:jagrutirbhatt@gmail.com";
  };

  return (
    <a className="flex items-center space-x-2  " onClick={handleClick}>
      <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
        👋 Contact Me
      </span>
    </a>
  );
};
export default ContactLink;
