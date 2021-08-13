import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');


let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
tmr.setInput("projectName", 'Test_Wrong_Preset');
tmr.setInput("additionalParams", '--sast-preset-name fake');
tmr.run();