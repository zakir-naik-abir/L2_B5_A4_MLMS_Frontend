export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Minimal Library. All rights
          reserved.
        </p>
        <p>Developed with ❤️ for a minimal library management system.</p>
      </div>
    </footer>
  );
};
