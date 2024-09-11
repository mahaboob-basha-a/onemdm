const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Raally',
  },

  api: {
    menu: 'API',
  },

  entities: {
    compensation: {
        name: 'compensation',
        label: 'Compensations',
        menu: 'Compensations',
        exporterFileName: 'compensation_export',
        list: {
          menu: 'Compensations',
          title: 'Compensations',
        },
        create: {
          success: 'Compensation successfully saved',
        },
        update: {
          success: 'Compensation successfully saved',
        },
        destroy: {
          success: 'Compensation successfully deleted',
        },
        destroyAll: {
          success: 'Compensation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Compensation',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'type': 'Type',
          'workAvailabilityRange': 'Work Availability',
          'workAvailability': 'Work Availability',
          'monetaryRange': 'Monetary',
          'monetary': 'Monetary',
          'paidTimeOffRange': 'Paid Time Off',
          'paidTimeOff': 'Paid Time Off',
          'otherBenefits': 'Other Benefits',
          'effectiveDateRange': 'Effective Date',
          'effectiveDate': 'Effective Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'hourly': 'Hourly',
            'salaried': 'Salaried',
          },
        },
        placeholders: {
          'type': 'Hourly/Salaried',
          'workAvailability': '40',
          'monetary': '00.00',
          'paidTimeOff': '0',
        },
        hints: {
          'type': 'Compensation type (hourly or salaried)',
          'workAvailability': 'How much availaibility does this compensation cover in hours per week.',
          'monetary': 'Person\'s monetary compensation',
          'paidTimeOff': 'The emount of paid time off that is part of the compensation',
          'otherBenefits': 'Which other benefits does compensation cover.',
          'effectiveDate': 'The day the compensation starts being effective',
        },
        new: {
          title: 'New Compensation',
        },
        view: {
          title: 'View Compensation',
        },
        importer: {
          title: 'Import Compensations',
          fileName: 'compensation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    person: {
        name: 'person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'person_export',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person successfully saved',
        },
        update: {
          success: 'Person successfully saved',
        },
        destroy: {
          success: 'Person successfully deleted',
        },
        destroyAll: {
          success: 'Person(s) successfully deleted',
        },
        edit: {
          title: 'Edit Person',
        },
        fields: {
          id: 'Id',
          'fullName': 'Full Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'fullName': 'Full name...',
        },
        hints: {
          'fullName': 'Person\'s full name.',
        },
        new: {
          title: 'New Person',
        },
        view: {
          title: 'View Person',
        },
        importer: {
          title: 'Import People',
          fileName: 'person_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    jobTitle: {
        name: 'jobTitle',
        label: 'Job Titles',
        menu: 'Job Titles',
        exporterFileName: 'jobTitle_export',
        list: {
          menu: 'Job Titles',
          title: 'Job Titles',
        },
        create: {
          success: 'Job Title successfully saved',
        },
        update: {
          success: 'Job Title successfully saved',
        },
        destroy: {
          success: 'Job Title successfully deleted',
        },
        destroyAll: {
          success: 'Job Title(s) successfully deleted',
        },
        edit: {
          title: 'Edit Job Title',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'title': 'Title',
          'effectiveDateRange': 'Effective Date',
          'effectiveDate': 'Effective Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'title': 'Job title of a person',
          'effectiveDate': 'The date the title becomes active.',
        },
        new: {
          title: 'New Job Title',
        },
        view: {
          title: 'View Job Title',
        },
        importer: {
          title: 'Import Job Titles',
          fileName: 'jobTitle_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    project: {
        name: 'project',
        label: 'Projects',
        menu: 'Projects',
        exporterFileName: 'project_export',
        list: {
          menu: 'Projects',
          title: 'Projects',
        },
        create: {
          success: 'Project successfully saved',
        },
        update: {
          success: 'Project successfully saved',
        },
        destroy: {
          success: 'Project successfully deleted',
        },
        destroyAll: {
          success: 'Project(s) successfully deleted',
        },
        edit: {
          title: 'Edit Project',
        },
        fields: {
          id: 'Id',
          'projectId': 'Project ID',
          'name': 'Name',
          'type': 'Type',
          'teamMembers': 'Team Members',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'managed-project': 'Managed-project',
            'non-managed-project': 'Non-managed-project',
            'team-augmentation': 'Team-augmentation',
          },
        },
        placeholders: {
          'projectId': 'Project Internal ID',
          'name': 'Project Name',
          'type': 'Project Type',
        },
        hints: {
          'projectId': 'The internal company-wide ID of the project.',
          'name': 'The name of the project.',
          'type': 'The type of the poject.',
        },
        new: {
          title: 'New Project',
        },
        view: {
          title: 'View Project',
        },
        importer: {
          title: 'Import Projects',
          fileName: 'project_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    assignment: {
        name: 'assignment',
        label: 'Assignments',
        menu: 'Assignments',
        exporterFileName: 'assignment_export',
        list: {
          menu: 'Assignments',
          title: 'Assignments',
        },
        create: {
          success: 'Assignment successfully saved',
        },
        update: {
          success: 'Assignment successfully saved',
        },
        destroy: {
          success: 'Assignment successfully deleted',
        },
        destroyAll: {
          success: 'Assignment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Assignment',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'project': 'Project',
          'hoursPerWeekRange': 'Hours Per Week',
          'hoursPerWeek': 'Hours Per Week',
          'startDateRange': 'Start Date',
          'startDate': 'Start Date',
          'endDateRange': 'End Date',
          'endDate': 'End Date',
          'role': 'Role',
          'notes': 'Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'role': {
            'project-manager': 'Project-manager',
            'technical-team-lead': 'Technical-team-lead',
            'lead-developer': 'Lead-developer',
            'developer': 'Developer',
            'qa': 'Qa',
            'designer': 'Designer',
          },
        },
        placeholders: {
          'person': 'Person to assign...',
          'project': 'Project ID',
          'hoursPerWeek': 'Hours per week',
          'notes': 'Additional notes...',
        },
        hints: {
          'person': 'Pick a person to create new assignment.',
          'project': 'Project to be assigned to.',
          'hoursPerWeek': 'How many hours per week is this assignment for.',
          'startDate': 'The effective start date of the assignment.',
          'endDate': 'The date when the assignment was finished.',
          'role': 'What is the role of the person being assigned.',
          'notes': 'Any notes worth mentioining regarding this assignment.',
        },
        new: {
          title: 'New Assignment',
        },
        view: {
          title: 'View Assignment',
        },
        importer: {
          title: 'Import Assignments',
          fileName: 'assignment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Resource Manager',
      description: 'Resource manager access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme'
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `The server took {0} ms to generate dashboard data.`,
    charts: {
      busy: 'Busy',
      idle: 'Idle',
      fullyBusy: 'Fully Busy',
      partlyIdle: 'Partly Idle',
      fullyIdle: 'Fully Idle',
      projectManager: 'Project Manager',
      technicalLead: 'Technical Lead',
      seniorDeveloper: 'Senior Developer',
      intermediateDeveloper: 'Intermediate Developer',
      juniorDeveloper: 'Junior Developer',
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Ops, an error occurred.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
