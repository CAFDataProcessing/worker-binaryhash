/*
 * Copyright 2017-2020 Micro Focus or one of its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    "workerName": "worker-binaryhash",
    "workerVersion": "${project.version}",
    "outputQueue": getenv("CAF_WORKER_OUTPUT_QUEUE")
        || (getenv("CAF_WORKER_BASE_QUEUE_NAME") || getenv("CAF_WORKER_NAME") || "worker") + "-out",
    "threads": getenv("CAF_WORKER_THREADS") || 1,
    "resultSizeThreshold": getenv("CAF_BINARYHASH_WORKER_RESULT_SIZE_THRESHOLD") || 1024
});