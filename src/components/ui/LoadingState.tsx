import React from 'react'
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  isLoading = false,
  loadingText = "Loading...",
  disabled = false,
  ...props
}) => {
  return (
    <Button disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
};
