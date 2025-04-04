/**
 * Simple AI Processor for testing Kubernetes integration
 */

// Check if we're running with the --process-ai flag
const isProcessAi = process.argv.includes('--process-ai');

// Function to format the current time
function getFormattedTime(): string {
  return new Date().toISOString();
}

// Main function to process AI task
async function processAiTask(): Promise<void> {
  // Get environment variables that are passed from the K8s job
  const conversationId = process.env.CONVERSATION_ID || 'unknown';
  const jobId = process.env.JOB_ID || 'unknown';
  const configEnv = process.env.CONFIG_ENV || 'development';

  console.log(`[${getFormattedTime()}] Starting AI processing task`);
  console.log(`[${getFormattedTime()}] Environment: ${configEnv}`);
  console.log(`[${getFormattedTime()}] Conversation ID: ${conversationId}`);
  console.log(`[${getFormattedTime()}] Job ID: ${jobId}`);

  // Simulate some processing time
  console.log(`[${getFormattedTime()}] Processing AI task...`);
  
  // Wait for 2 seconds to simulate work
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Log success
  console.log(`[${getFormattedTime()}] AI task completed successfully!`);
  console.log(`[${getFormattedTime()}] Task summary:`);
  console.log(`[${getFormattedTime()}] - Conversation: ${conversationId}`);
  console.log(`[${getFormattedTime()}] - Job: ${jobId}`);
  console.log(`[${getFormattedTime()}] - Status: SUCCESS`);
}

// Run the application
async function bootstrap(): Promise<void> {
  try {
    if (isProcessAi) {
      // If running with --process-ai flag, process the AI task
      await processAiTask();
      // Exit with success code
      process.exit(0);
    } else {
      // If not running with --process-ai flag, log an error
      console.error('Error: This application should be run with --process-ai flag');
      process.exit(1);
    }
  } catch (error) {
    // Log any errors
    console.error(`[${getFormattedTime()}] Error processing AI task:`, error);
    process.exit(1);
  }
}

// Start the application
bootstrap(); 