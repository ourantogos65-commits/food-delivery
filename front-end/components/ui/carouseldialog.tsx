import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,

  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const CarouselDialog = () => {
  return (
    <div className="relative">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="rounded-full w-11 h-11 text-4xl items-center mt-38 ml-76 absolute "
            variant="outline"
          >
            +
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[800px] max-w-full">
          <AlertDialogHeader>
          
           
            <AlertDialogDescription>
              <div className="flex gap-6 items-center">
                <img
                  src="./food.png"
                  alt="Food"
                  className="w-72 h-72 object-cover rounded-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold text-red-500">
                    Sunshine Sta
                  </h1>
                  <p className="mt-2 text-gray-600">
                 ghnhg
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

        {/* <AlertDialogContent className="w-[800px] max-w-full">
          <AlertDialogHeader >
            <AlertDialogDescription>
              <div className="flex w-[826px]">
                <img src="./food.png" alt="" className="w-[300px] h-[300px]" />
                <div>
                  <h1 className="text-3xl text-red-300">Sunshine Sta</h1>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent> */}
      </AlertDialog>
    </div>
  );
};
