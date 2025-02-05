import { Permission } from "../../../common/constants/permissions";

export const SUPERADMIN_PERMISSIONS = ["all-allowed"];

export const ORGADMIN_PERMISSIONS = ["all-allowed:except-other-org-data"];

export const ADMIN_PERMISSIONS = ["all-allowed:except-subscription-in-his-org"];

export const MEMBER_PERMISSIONS = [
  "no-add:project",
  "no-edit:project",
  "no-delete:project",
  "no-delete:milestone",
  "no-add:user",
  "no-edit:other-user",
  "no-resend:password-link",
  "no-add:-multiple-user",
  "no-configure:jira-integration",
  "no-edit:jira-integration-configure",
];

export const SUPERADMIN_BACKEND_PERMISSIONS = [
  Permission.ADD_DEFECT_REF,
  Permission.UPDATE_DEFECT_REF,
  Permission.GET_DEFECT_DETAILS,
  Permission.UPDATE_MILESTONE,
  Permission.UPDATE_MILESTONE_STATUS,
  Permission.DELETE_MILESTONE,
  Permission.GET_MILESTONE_DETAILS,
  Permission.GET_ORG,
  Permission.ADD_MEMBER,
  Permission.GET_MEMBERS,
  Permission.GET_ORG_MEMBERS,
  Permission.UPDATE_MEMBER,
  Permission.RESET_PASSWORD_LINK,
  Permission.ADD_MEMBERS,
  Permission.GET_PROJECTS_ORG,
  Permission.GET_MOST_ACTIVE_PROJECTS,
  Permission.GET_SEARCH_RESULTS,
  Permission.ADD_PLUGIN,
  Permission.GET_PLUGIN,
  Permission.UPDATE_PLUGIN,
  Permission.LIST_PROJECT_IN_PLUGIN,
  Permission.LIST_ISSUES_PLUGIN,
  Permission.GET_ISSUE_TYPE_PLUGIN,
  Permission.GET_USERS_IN_PLUGIN_PROJECT,
  Permission.GET_SPRINTS_IN_PLUGIN_PROJECT,
  Permission.GET_ACTIVITY_TESTSUITES,
  Permission.GET_ACTIVITY_MILESTONES,
  Permission.GET_PROJECT_ACTIVITIES,
  Permission.GET_TESTCASE_RESULT_ACTIVITIES,
  Permission.GET_TESTCASE_CHANGES_ACTIVITIES,
  Permission.CREATE_MILESTONE,
  Permission.GET_OPEN_MILESTONES,
  Permission.GET_ALL_MILESTONES,
  Permission.CREATE_SECTION,
  Permission.UPDATE_SECTION,
  Permission.GET_ALL_SECTION,
  Permission.DELETE_SECTION,
  Permission.REORDER_TESTCASES_SECTION,
  Permission.CREATE_PROJECT_TESTCASE,
  Permission.ADD_TESTCASE_PDF,
  Permission.GET_PROJECT_TESTCASE,
  Permission.EDIT_TESTCASE,
  Permission.EDIT_MULTIPLE_TESTCASES,
  Permission.LISTING_PROJECT_TESTCASES,
  Permission.GET_TESTCASE_DETAILS,
  Permission.ADD_TESTSUITE_PDF,
  Permission.ADD_TESTSUITE_RESULT_PDF,
  Permission.CREATE_PROJECT_TESTSUITES,
  Permission.CREATE_FILTERED_TESTSUITES,
  Permission.EDIT_TESTSUITES,
  Permission.GET_TESTSUITE,
  Permission.GET_TESTSUITES,
  Permission.CREATE_PROJECT,
  Permission.EDIT_PROJECT,
  Permission.GET_PROJECT_DETAILS,
  Permission.DELETE_PROJECT,
  Permission.GET_PROJECT_LISTING,
  Permission.UPLOAD_IMAGE_PROJECT,
  Permission.GET_PROJECT_TODO,
  Permission.GET_TESTCASE_ACTIVITY_USER,
  Permission.GET_FAVORITE_PROJECTS,
  Permission.ADD_FAVORITE_PROJECT,
  Permission.DELETE_FAVORITE_PROJECT,
  Permission.GET_USERS,
  Permission.GET_USER,
  Permission.GET_DASHBOARD_INFO,
  Permission.CHANGE_PASSWORD,
  Permission.UPDATE_USER,
  Permission.UPDATE_USER_STATUS,
  Permission.UPLOAD_USER_PROFILE_PICTURE,
  Permission.ADD_CONTACT_FORM,
  Permission.GET_TESTCASE_DETAILS,
  Permission.DELETE_TESTCASE,
  Permission.DELETE_TESTCASES,
  Permission.EDIT_TESTCASE_RESULT,
  Permission.DELETE_TESTSUITES,
  Permission.CREATE_CHECKOUT_SESSION,
  Permission.CREATE_PORTAL_SESSION,
  Permission.GET_PRODUCT,
];

export const ORGADMIN_BACKEND_PERMISSIONS = [
  Permission.REACTIVATE_USER,
  Permission.DELETE_USER,
  Permission.GET_ARCHIVED_USERS,
  Permission.ARCHIVE_USER,
  Permission.ARCHIVE_PROJECT,
  Permission.RESTORE_PROJECT,
  Permission.LIST_ARCHIVE_PROJECT,
  Permission.ADD_DEFECT_REF,
  Permission.UPDATE_DEFECT_REF,
  Permission.GET_DEFECT_DETAILS,
  Permission.UPDATE_MILESTONE,
  Permission.UPDATE_MILESTONE_STATUS,
  Permission.DELETE_MILESTONE,
  Permission.GET_MILESTONE_DETAILS,
  Permission.GET_ORG,
  Permission.ADD_MEMBER,
  Permission.GET_MEMBERS,
  Permission.GET_ORG_MEMBERS,
  Permission.UPDATE_MEMBER,
  Permission.RESET_PASSWORD_LINK,
  Permission.ADD_MEMBERS,
  Permission.GET_PROJECTS_ORG,
  Permission.GET_MOST_ACTIVE_PROJECTS,
  Permission.GET_SEARCH_RESULTS,
  Permission.ADD_PLUGIN,
  Permission.GET_PLUGIN,
  Permission.UPDATE_PLUGIN,
  Permission.LIST_PROJECT_IN_PLUGIN,
  Permission.LIST_ISSUES_PLUGIN,
  Permission.GET_ISSUE_TYPE_PLUGIN,
  Permission.GET_USERS_IN_PLUGIN_PROJECT,
  Permission.GET_SPRINTS_IN_PLUGIN_PROJECT,
  Permission.GET_ACTIVITY_TESTSUITES,
  Permission.GET_ACTIVITY_MILESTONES,
  Permission.GET_PROJECT_ACTIVITIES,
  Permission.GET_TESTCASE_RESULT_ACTIVITIES,
  Permission.GET_TESTCASE_CHANGES_ACTIVITIES,
  Permission.CREATE_MILESTONE,
  Permission.GET_OPEN_MILESTONES,
  Permission.GET_ALL_MILESTONES,
  Permission.CREATE_SECTION,
  Permission.UPDATE_SECTION,
  Permission.GET_ALL_SECTION,
  Permission.DELETE_SECTION,
  Permission.REORDER_TESTCASES_SECTION,
  Permission.CREATE_PROJECT_TESTCASE,
  Permission.ADD_TESTCASE_PDF,
  Permission.GET_PROJECT_TESTCASE,
  Permission.EDIT_TESTCASE,
  Permission.EDIT_MULTIPLE_TESTCASES,
  Permission.LISTING_PROJECT_TESTCASES,
  Permission.GET_TESTCASE_DETAILS,
  Permission.ADD_TESTSUITE_PDF,
  Permission.ADD_TESTSUITE_RESULT_PDF,
  Permission.CREATE_PROJECT_TESTSUITES,
  Permission.CREATE_FILTERED_TESTSUITES,
  Permission.EDIT_TESTSUITES,
  Permission.GET_TESTSUITE,
  Permission.GET_TESTSUITES,
  Permission.CREATE_PROJECT,
  Permission.EDIT_PROJECT,
  Permission.GET_PROJECT_DETAILS,
  Permission.DELETE_PROJECT,
  Permission.GET_PROJECT_LISTING,
  Permission.UPLOAD_IMAGE_PROJECT,
  Permission.GET_PROJECT_TODO,
  Permission.GET_TESTCASE_ACTIVITY_USER,
  Permission.GET_FAVORITE_PROJECTS,
  Permission.ADD_FAVORITE_PROJECT,
  Permission.DELETE_FAVORITE_PROJECT,
  Permission.GET_USERS,
  Permission.GET_USER,
  Permission.GET_DASHBOARD_INFO,
  Permission.CHANGE_PASSWORD,
  Permission.UPDATE_USER,
  Permission.UPDATE_USER_STATUS,
  Permission.UPLOAD_USER_PROFILE_PICTURE,
  Permission.ADD_CONTACT_FORM,
  Permission.GET_TESTCASE_DETAILS,
  Permission.DELETE_TESTCASE,
  Permission.DELETE_TESTCASES,
  Permission.EDIT_TESTCASE_RESULT,
  Permission.DELETE_TESTSUITES,
  Permission.CREATE_CHECKOUT_SESSION,
  Permission.CREATE_PORTAL_SESSION,
  Permission.GET_PRODUCT,
  Permission.UPDATE_SUBSCRIPTION_STATUS,
  Permission.ADD_PROJECT_MEMBER,
  Permission.GET_PROJECT_MEMBER,
  Permission.DELETE_PROJECT_MEMBER,
];

export const ADMIN_BACKEND_PERMISSIONS = [
  Permission.REACTIVATE_USER,
  Permission.DELETE_USER,
  Permission.GET_ARCHIVED_USERS,
  Permission.ARCHIVE_USER,
  Permission.ARCHIVE_PROJECT,
  Permission.RESTORE_PROJECT,
  Permission.LIST_ARCHIVE_PROJECT,
  Permission.ADD_DEFECT_REF,
  Permission.UPDATE_DEFECT_REF,
  Permission.GET_DEFECT_DETAILS,
  Permission.UPDATE_MILESTONE,
  Permission.UPDATE_MILESTONE_STATUS,
  Permission.DELETE_MILESTONE,
  Permission.GET_MILESTONE_DETAILS,
  Permission.GET_ORG,
  Permission.ADD_MEMBER,
  Permission.GET_MEMBERS,
  Permission.GET_ORG_MEMBERS,
  Permission.UPDATE_MEMBER,
  Permission.RESET_PASSWORD_LINK,
  Permission.ADD_MEMBERS,
  Permission.GET_PROJECTS_ORG,
  Permission.GET_MOST_ACTIVE_PROJECTS,
  Permission.GET_SEARCH_RESULTS,
  Permission.ADD_PLUGIN,
  Permission.GET_PLUGIN,
  Permission.UPDATE_PLUGIN,
  Permission.LIST_PROJECT_IN_PLUGIN,
  Permission.LIST_ISSUES_PLUGIN,
  Permission.GET_ISSUE_TYPE_PLUGIN,
  Permission.GET_USERS_IN_PLUGIN_PROJECT,
  Permission.GET_SPRINTS_IN_PLUGIN_PROJECT,
  Permission.GET_ACTIVITY_TESTSUITES,
  Permission.GET_ACTIVITY_MILESTONES,
  Permission.GET_PROJECT_ACTIVITIES,
  Permission.GET_TESTCASE_RESULT_ACTIVITIES,
  Permission.GET_TESTCASE_CHANGES_ACTIVITIES,
  Permission.CREATE_MILESTONE,
  Permission.GET_OPEN_MILESTONES,
  Permission.GET_ALL_MILESTONES,
  Permission.CREATE_SECTION,
  Permission.UPDATE_SECTION,
  Permission.GET_ALL_SECTION,
  Permission.DELETE_SECTION,
  Permission.REORDER_TESTCASES_SECTION,
  Permission.CREATE_PROJECT_TESTCASE,
  Permission.ADD_TESTCASE_PDF,
  Permission.GET_PROJECT_TESTCASE,
  Permission.EDIT_TESTCASE,
  Permission.EDIT_MULTIPLE_TESTCASES,
  Permission.LISTING_PROJECT_TESTCASES,
  Permission.GET_TESTCASE_DETAILS,
  Permission.ADD_TESTSUITE_PDF,
  Permission.ADD_TESTSUITE_RESULT_PDF,
  Permission.CREATE_PROJECT_TESTSUITES,
  Permission.CREATE_FILTERED_TESTSUITES,
  Permission.EDIT_TESTSUITES,
  Permission.GET_TESTSUITE,
  Permission.GET_TESTSUITES,
  Permission.CREATE_PROJECT,
  Permission.EDIT_PROJECT,
  Permission.GET_PROJECT_DETAILS,
  Permission.DELETE_PROJECT,
  Permission.GET_PROJECT_LISTING,
  Permission.UPLOAD_IMAGE_PROJECT,
  Permission.GET_PROJECT_TODO,
  Permission.GET_TESTCASE_ACTIVITY_USER,
  Permission.GET_FAVORITE_PROJECTS,
  Permission.ADD_FAVORITE_PROJECT,
  Permission.DELETE_FAVORITE_PROJECT,
  Permission.GET_USERS,
  Permission.GET_USER,
  Permission.GET_DASHBOARD_INFO,
  Permission.CHANGE_PASSWORD,
  Permission.UPDATE_USER,
  Permission.UPDATE_USER_STATUS,
  Permission.UPLOAD_USER_PROFILE_PICTURE,
  Permission.ADD_CONTACT_FORM,
  Permission.GET_TESTCASE_DETAILS,
  Permission.DELETE_TESTCASE,
  Permission.DELETE_TESTCASES,
  Permission.EDIT_TESTCASE_RESULT,
  Permission.DELETE_TESTSUITES,
  Permission.ADD_PROJECT_MEMBER,
  Permission.GET_PROJECT_MEMBER,
  Permission.DELETE_PROJECT_MEMBER,
];

export const MEMBER_BACKEND_PERMISSIONS = [
  Permission.GET_DEFECT_DETAILS,
  Permission.GET_MILESTONE_DETAILS,
  Permission.UPDATE_MILESTONE_STATUS,
  Permission.GET_ORG,
  Permission.GET_MEMBERS,
  Permission.GET_ORG_MEMBERS,
  Permission.GET_PROJECTS_ORG,
  Permission.GET_MOST_ACTIVE_PROJECTS,
  Permission.GET_SEARCH_RESULTS,
  Permission.GET_PLUGIN,
  Permission.LIST_PROJECT_IN_PLUGIN,
  Permission.LIST_ISSUES_PLUGIN,
  Permission.GET_ISSUE_TYPE_PLUGIN,
  Permission.GET_USERS_IN_PLUGIN_PROJECT,
  Permission.GET_SPRINTS_IN_PLUGIN_PROJECT,
  Permission.GET_ACTIVITY_TESTSUITES,
  Permission.GET_ACTIVITY_MILESTONES,
  Permission.GET_PROJECT_ACTIVITIES,
  Permission.CREATE_PROJECT_TESTCASE,
  Permission.EDIT_TESTCASE,
  Permission.DELETE_TESTCASE,
  Permission.DELETE_TESTCASES,
  Permission.GET_TESTCASE_RESULT_ACTIVITIES,
  Permission.GET_TESTCASE_CHANGES_ACTIVITIES,
  Permission.GET_OPEN_MILESTONES,
  Permission.GET_ALL_MILESTONES,
  Permission.CREATE_SECTION,
  Permission.UPDATE_SECTION,
  Permission.GET_ALL_SECTION,
  Permission.DELETE_SECTION,
  Permission.GET_PROJECT_TESTCASE,
  Permission.GET_TESTCASE_DETAILS,
  Permission.GET_TESTSUITE,
  Permission.GET_TESTSUITES,
  Permission.GET_PROJECT_DETAILS,
  Permission.GET_PROJECT_LISTING,
  Permission.GET_PROJECT_TODO,
  Permission.GET_TESTCASE_ACTIVITY_USER,
  Permission.GET_FAVORITE_PROJECTS,
  Permission.ADD_FAVORITE_PROJECT,
  Permission.DELETE_FAVORITE_PROJECT,
  Permission.GET_USERS,
  Permission.GET_USER,
  Permission.GET_DASHBOARD_INFO,
  Permission.LISTING_PROJECT_TESTCASES,
  Permission.ADD_TESTSUITE_PDF,
  Permission.ADD_TESTSUITE_RESULT_PDF,
  Permission.CREATE_PROJECT_TESTSUITES,
  Permission.CREATE_FILTERED_TESTSUITES,
  Permission.EDIT_TESTSUITES,
  Permission.DELETE_TESTSUITES,
  Permission.ADD_TESTCASE_PDF,
  Permission.UPDATE_USER,
  Permission.EDIT_MULTIPLE_TESTCASES,
  Permission.EDIT_TESTCASE_RESULT,
  Permission.CREATE_MILESTONE,
  Permission.UPDATE_MILESTONE,
  Permission.UPLOAD_IMAGE_PROJECT,
  Permission.REORDER_TESTCASES_SECTION,
];
