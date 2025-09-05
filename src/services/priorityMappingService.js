'use strict';

angular.module('bahmni.appointments')
    .factory('priorityMappingService', ['appService', function (appService) {
        return {
            applyPriorityMapping: function(appointments) {
                if (!appointments || !Array.isArray(appointments)) {
                    return appointments;
                }
                
                var priorityOptionsList = appService.getAppDescriptor().getConfigValue('priorityOptionsList') || [];
                
                if (!priorityOptionsList || priorityOptionsList.length === 0) {
                    return appointments;
                }
                
                appointments.forEach(function(appointment) {
                    if (appointment && appointment.priority) {
                        var priorityConfig = priorityOptionsList.find(function(priority) { 
                            return priority.value === appointment.priority; 
                        });
                        
                        if (priorityConfig && priorityConfig.label) {
                            appointment.priority = priorityConfig.label;
                        }
                    }
                });
                
                return appointments;
            }
        };
    }]);
