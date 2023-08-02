import { useEffect } from 'react';

export default function Demo() {
  useEffect(() => {
    console.log('hello world');
  }, []);

  return <div>Hello World</div>;
}
