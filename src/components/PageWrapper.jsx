import Reviews from './Pages/Reviews';

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col p-8 space-y-2 bg-white flex-grow pb-4 rounded-xl">
      {children}
    </div>
  );
}
