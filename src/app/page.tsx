'use client';

import { Button } from '@/atoms/button';

export default function Page() {
  return (
    <div>
      App Page - {process.env.NEXT_PUBLIC_WEB_DOMAIN as string}
      <br />
      <Button
        onClick={() => console.log('Click')}
        size="L"
        variant="contained"
        color="primary"
        shape="rounded"
      >
        Button
      </Button>
    </div>
  );
}
