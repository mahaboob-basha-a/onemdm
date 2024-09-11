const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continuar',
    filters: 'Filtros',
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
        label: 'Compensaciones',
        menu: 'Compensaciones',
        exporterFileName: 'exportacion_compensacions',
        list: {
          menu: 'Compensaciones',
          title: 'Compensaciones',
        },
        create: {
          success: 'Compensación guardada con éxito',
        },
        update: {
          success: 'Compensación guardada con éxito',
        },
        destroy: {
          success: 'Compensación eliminada con éxito',
        },
        destroyAll: {
          success: 'Compensación(es) eliminada(s) con éxito',
        },
        edit: {
          title: 'Editar Compensación',
        },
        fields: {
          id: 'Id',
          'person': 'Persona',
          'type': 'Tipo',
          'workAvailabilityRange': 'Disponibilidad de trabajo',
          'workAvailability': 'Disponibilidad de trabajo',
          'monetaryRange': 'Monetaria',
          'monetary': 'Monetaria',
          'paidTimeOffRange': 'Tiempo libre pagado',
          'paidTimeOff': 'Tiempo libre pagado',
          'otherBenefits': 'Otros beneficios',
          'effectiveDateRange': 'Fecha',
          'effectiveDate': 'Fecha de inicio',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'type': {
            'hourly': 'Cada hora',
            'salaried': 'Asalariado',
          },
        },
        placeholders: {
          'type': 'Cada hora/Asalariado',
          'workAvailability': '40',
          'monetary': '00.00',
          'paidTimeOff': '0',
        },
        hints: {
          'type': 'Tipo de compensación (por hora o asalariado)',
          'workAvailability': 'Cuánta disponibilidad cubre esta compensación en horas por semana.',
          'monetary': 'Compensación monetaria de la persona',
          'paidTimeOff': 'La cantidad de tiempo libre pagado que es parte de la compensación',
          'otherBenefits': '¿Qué otros beneficios cubre la compensación?',
          'effectiveDate': 'El día en que comienza a ser efectiva la compensación',
        },
        new: {
          title: 'Nueva Compensación',
        },
        view: {
          title: 'Ver Compensación',
        },
        importer: {
          title: 'Importar Compensación',
          fileName: 'compensation_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    person: {
        name: 'person',
        label: 'Personas',
        menu: 'Personas',
        exporterFileName: 'exportacion_persona',
        list: {
          menu: 'Personas',
          title: 'Personas',
        },
        create: {
          success: 'Persona guardada con éxito',
        },
        update: {
          success: 'Persona guardada con éxito',
        },
        destroy: {
          success: 'Persona eliminada con éxito',
        },
        destroyAll: {
          success: 'Persona(s) eliminada(s) con éxito',
        },
        edit: {
          title: 'Editar Persona',
        },
        fields: {
          id: 'Id',
          'fullName': 'Nombre completo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'fullName': 'Nombre completo...',
        },
        hints: {
          'fullName': 'Nombre completo de la persona.',
        },
        new: {
          title: 'Nueva Persona',
        },
        view: {
          title: 'Ver Persona',
        },
        importer: {
          title: 'Importar Personas',
          fileName: 'persona_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    jobTitle: {
        name: 'jobTitle',
        label: 'Títulos de trabajos',
        menu: 'Títulos de trabajos',
        exporterFileName: 'exportacion_titulo_de_trabajos',
        list: {
          menu: 'Títulos de trabajos',
          title: 'Títulos de trabajos',
        },
        create: {
          success: 'Títulos de trabajo guardado con éxito',
        },
        update: {
          success: 'Títulos de trabajo guardado con éxito',
        },
        destroy: {
          success: 'Títulos de trabajo eliminado con éxito',
        },
        destroyAll: {
          success: 'Títulos de trabajo(s) eliminado(s) con éxito',
        },
        edit: {
          title: 'Editar Títulos de trabajo',
        },
        fields: {
          id: 'Id',
          'person': 'Persona',
          'title': 'Título',
          'effectiveDateRange': 'Fecha efectiva',
          'effectiveDate': 'Fecha efectiva',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'title': 'Título del trabajo de una persona',
          'effectiveDate': 'La fecha en que el título se vuelve activo.',
        },
        new: {
          title: 'Nuevo Título de trabajo',
        },
        view: {
          title: 'Ver Título de trabajo',
        },
        importer: {
          title: 'Importar Títulos de trabajos',
          fileName: 'titulo_de_trabajo_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    project: {
        name: 'project',
        label: 'Proyectos',
        menu: 'Proyectos',
        exporterFileName: 'exportacion_proyectos',
        list: {
          menu: 'Proyectos',
          title: 'Proyectos',
        },
        create: {
          success: 'Proyecto guardado con éxito',
        },
        update: {
          success: 'Proyecto guardado con éxito',
        },
        destroy: {
          success: 'Proyecto eliminado con éxito',
        },
        destroyAll: {
          success: 'Proyecto(s) eliminado(s) con éxito',
        },
        edit: {
          title: 'Editar Proyecto',
        },
        fields: {
          id: 'Id',
          'projectId': 'Proyecto ID',
          'name': 'Nombre',
          'type': 'Tipo',
          'teamMembers': 'Miembros del equipo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'type': {
            'managed-project': 'Managed-project',
            'non-managed-project': 'Non-managed-project',
            'team-augmentation': 'Team-augmentation',
          },
        },
        placeholders: {
          'projectId': 'Proyecto Internal ID',
          'name': 'Nombre del proyecto',
          'type': 'Tipo de proyecto',
        },
        hints: {
          'projectId': 'El ID interno de la empresa del proyecto.',
          'name': 'El nombre del proyecto.',
          'type': 'El tipo de poyecto.',
        },
        new: {
          title: 'Nuevo Proyecto',
        },
        view: {
          title: 'Ver Proyecto',
        },
        importer: {
          title: 'Importar Proyectos',
          fileName: 'project_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    assignment: {
        name: 'assignment',
        label: 'Asignacións',
        menu: 'Asignacións',
        exporterFileName: 'exportacion_asignacion',
        list: {
          menu: 'Asignacións',
          title: 'Asignacións',
        },
        create: {
          success: 'Asignación guardada con éxito',
        },
        update: {
          success: 'Asignación guardada con éxito',
        },
        destroy: {
          success: 'Asignación eliminada con éxito',
        },
        destroyAll: {
          success: 'Asignación(s) eliminada con éxito',
        },
        edit: {
          title: 'Editar Asignación',
        },
        fields: {
          id: 'Id',
          'person': 'Persona',
          'project': 'Proyecto',
          'hoursPerWeekRange': 'Horas por semana',
          'hoursPerWeek': 'Horas por semana',
          'startDateRange': 'Fecha de inicio',
          'startDate': 'Fecha de inicio',
          'endDateRange': 'Fecha final',
          'endDate': 'Fecha final',
          'role': 'Papel',
          'notes': 'Notas',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          'person': 'Persona a asignar...',
          'project': 'Proyecto ID',
          'hoursPerWeek': 'Horas por semana',
          'notes': 'Notas adicionales...',
        },
        hints: {
          'person': 'Elija una persona para crear una nueva asignación.',
          'project': 'Proyecto a asignar.',
          'hoursPerWeek': '¿Para cuántas horas a la semana es esta tarea?',
          'startDate': 'La fecha efectiva de inicio de la asignación.',
          'endDate': 'La fecha en que finalizó la asignación.',
          'role': 'Cuál es el rol de la persona que se le asigna.',
          'notes': 'Cualquier nota que valga la pena mencionar con respecto a esta tarea.',
        },
        new: {
          title: 'Nueva Asignación',
        },
        view: {
          title: 'Ver Asignación',
        },
        importer: {
          title: 'Importar Asignacións',
          fileName: 'asignacions_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Administrador de recursos',
      description: 'Acceso al administrador de recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Papel',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      rolesUser: 'Rol/Usuario',
      roles: 'Papels',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los Papels deben ser los identificadores de Papels separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
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
    menu: 'Tablero',
    message: `El servidor tardó {0} ms en generar los datos del panel.`,
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
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429': 'Ops, ocurrió un error.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
      invalid: '${path} debe ser un número',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },

  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: 'Siguientes 5 páginas',
    next_5: 'Next 5 Pages',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },

  paginator: {
    itemsPerPageLabel: 'Elementos por página:',
    nextPageLabel: 'Siguiente página',
    previousPageLabel: 'Pagina anterior',
    firstPageLabel: 'Primera página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },
  datetime: {
    upSecondLabel: 'Añadir un segundo',
    downSecondLabel: 'Menos un segundo',
    upMinuteLabel: 'Añadir un minuto',
    downMinuteLabel: 'Menos un minuto',
    upHourLabel: 'Agregar una hora',
    downHourLabel: 'Menos una hora',
    prevMonthLabel: 'Mes anterior',
    nextMonthLabel: 'Próximo mes',
    prevYearLabel: 'Año anterior',
    nextYearLabel: 'El próximo año',
    prevMultiYearLabel: '21 años anteriores',
    nextMultiYearLabel: 'Próximos 21 años',
    switchToMonthViewLabel: 'Cambiar a vista mensual',
    switchToMultiYearViewLabel: 'Elige mes y año',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Conjunto',
    rangeFromLabel: 'De',
    rangeToLabel: 'A',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },
  table: {
    noData: 'Sin datos',
    loading: 'Cargando...',
  },

  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;