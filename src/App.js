import React, { useEffect, useState } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

function App() {
  const [links, setLinks] = useState([]),
    loadLinks = async () => {
      try {
        const res = await fetch('/api/getLinks'),
          links = await res.json();

        setLinks(links);
      } catch (error) {
        console.error(error);
      }
    }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List of links</h1>
      <LinkForm  refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
