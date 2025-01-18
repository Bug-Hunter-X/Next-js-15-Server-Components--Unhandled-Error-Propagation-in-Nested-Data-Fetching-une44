# Next.js 15 Server Components: Unhandled Error Propagation in Nested Data Fetching

This repository demonstrates a subtle bug in Next.js 15's server components related to error handling during nested data fetching.  When a parent server component fails to fetch data, the error might not be properly propagated to its child components, leading to unexpected rendering behavior.

## Bug Description

The `nestedFetchError.js` file shows a parent component fetching data. If this fetch fails, the child component still renders, using potentially stale or incorrect data. The lack of clear error indication in the child component makes debugging difficult.

## Solution

The `nestedFetchSolution.js` file demonstrates a solution using `try...catch` blocks and error boundaries to handle errors gracefully.  This ensures that errors from parent components are properly handled and propagated to child components, preventing rendering issues and providing a clear indication of the problem.