// Generated by ServiceNow SDK

import {
    Table,
    SystemClassNameColumn,
    StringColumn,
    DateTimeColumn,
    GenericColumn,
    IntegerColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'
export const sys_metadata = Table({
    name: 'sys_metadata',
    schema: {
        sys_class_name: SystemClassNameColumn({
            mandatory: false,
            label: 'Class',
            read_only: false,
            active: true,
            default: 'javascript:current.getTableName();',
            maxLength: 80,
        }),
        sys_created_by: StringColumn({
            mandatory: false,
            label: 'Created by',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'none',
        }),
        sys_created_on: DateTimeColumn({
            mandatory: false,
            label: 'Created',
            read_only: false,
            active: true,
            maxLength: 40,
        }),
        sys_id: GenericColumn({
            mandatory: true,
            label: 'Sys ID',
            read_only: false,
            active: true,
            maxLength: 32,
            column_type: 'GUID',
        }),
        sys_mod_count: IntegerColumn({
            mandatory: false,
            label: 'Updates',
            read_only: false,
            active: true,
            maxLength: 40,
        }),
        sys_name: StringColumn({
            mandatory: false,
            label: 'Display name',
            read_only: false,
            active: true,
            maxLength: 255,
            dropdown: 'none',
        }),
        sys_package: ReferenceColumn({
            mandatory: false,
            label: 'Package',
            read_only: true,
            active: true,
            maxLength: 32,
            referenceTable: 'sys_package',
        }),
        sys_policy: StringColumn({
            mandatory: false,
            label: 'Protection policy',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'dropdown_with_none',
            choices: {
                protected: { label: 'Protected', sequence: 2, inactive: false, language: 'en' },
                read: { label: 'Read-only', sequence: 1, inactive: false, language: 'en' },
            },
        }),
        sys_scope: ReferenceColumn({
            mandatory: false,
            label: 'Application',
            read_only: false,
            active: true,
            default:
                "javascript:(((typeof parent == 'object') && parent != null && parent.getTableName() == 'sys_app') ? parent.sys_id : gs.getCurrentApplicationId())",
            maxLength: 32,
            referenceTable: 'sys_scope',
        }),
        sys_update_name: StringColumn({
            mandatory: false,
            label: 'Update name',
            read_only: false,
            active: true,
            maxLength: 250,
            dropdown: 'none',
        }),
        sys_updated_by: StringColumn({
            mandatory: false,
            label: 'Updated by',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'none',
        }),
        sys_updated_on: DateTimeColumn({
            mandatory: false,
            label: 'Updated',
            read_only: false,
            active: true,
            maxLength: 40,
        }),
    },
})

