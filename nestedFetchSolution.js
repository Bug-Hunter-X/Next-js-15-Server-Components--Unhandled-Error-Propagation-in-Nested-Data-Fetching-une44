/* nestedFetchSolution.js */
import { Suspense } from 'react';

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // Handle the error appropriately (log, fallback data, etc.)
    console.error('Data fetching failed:', error);
    return { error: 'Failed to fetch data' };
  }
}

function ParentComponent() {
  const { data, error } = useAsync(fetchData);
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} />
    </div>
  );
}

function ChildComponent({ data }) {
  if (data.error) return <div>Error in parent data</div> //Display error from parent
  return (
    <div>
      <h1>Child Component</h1>
      <p>Data from parent: {JSON.stringify(data)}</p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ParentComponent />
    </Suspense>
  );
}