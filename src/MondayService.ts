import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

class MondayService {

  async getContext() {
    try {
      const context = await monday.get("context");
      console.log("Monday Context: \n", context);

      if(context.errorMessage) {
        throw new Error(context.errorMessage);
      }

      return context.data;
      
    } catch (error: Error | unknown) {
      console.error(error);
      throw error;
    }
  }

}

export default MondayService;