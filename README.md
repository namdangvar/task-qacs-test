# Simple AI Processor for K8s Testing

This is a simple Node.js application that simulates an AI processing task for testing Kubernetes job integration.

## Overview

This application:
- Takes the `--process-ai` command line flag
- Reads environment variables (`CONVERSATION_ID`, `JOB_ID`, `CONFIG_ENV`)
- Logs task status and success messages
- Exits with code 0 on success

## Building and Running Locally

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Build
```bash
# Install dependencies
npm install

# Build the TypeScript code
npm run build
```

### Run
```bash
# Run the application with the required flag
npm start
# or directly with node
node dist/main.js --process-ai
```

### Test with Custom Environment Variables
```bash
CONVERSATION_ID=test-123 JOB_ID=job-456 CONFIG_ENV=test node dist/main.js --process-ai
```

## Docker Build and Run

### Build Docker Image
```bash
docker build -t ai-processor:latest .
```

### Run Docker Image
```bash
docker run -e CONVERSATION_ID=test-123 -e JOB_ID=job-456 -e CONFIG_ENV=test ai-processor:latest
```

## Using with Kubernetes

1. Build and push the Docker image to your registry

2. Configure your main application to use this image for AI processing jobs:
   ```
   WORKER_AI_PROCESSOR_IMAGE=ai-processor:latest
   ```

3. When the main application creates a Kubernetes job, it will use this image and pass the necessary environment variables.

## Expected Output

```
[2023-08-01T12:34:56.789Z] Starting AI processing task
[2023-08-01T12:34:56.789Z] Environment: development
[2023-08-01T12:34:56.789Z] Conversation ID: test-123
[2023-08-01T12:34:56.789Z] Job ID: job-456
[2023-08-01T12:34:56.789Z] Processing AI task...
[2023-08-01T12:34:58.789Z] AI task completed successfully!
[2023-08-01T12:34:58.789Z] Task summary:
[2023-08-01T12:34:58.789Z] - Conversation: test-123
[2023-08-01T12:34:58.789Z] - Job: job-456
[2023-08-01T12:34:58.789Z] - Status: SUCCESS
``` 
