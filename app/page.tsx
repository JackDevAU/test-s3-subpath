
import React from 'react'
import client from '../tina/__generated__/client';
import ClientPage from './[...filename]/client-page';

export default async function HomePage() {
    const data = await client.queries.page({
        relativePath: "home.mdx",
      });
    
      return (
          <ClientPage {...data} />
      );
}