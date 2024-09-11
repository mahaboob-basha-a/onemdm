const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
    start: 'Início',
    end: 'Fim',
    select: 'Selecionar',
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
        name: 'Compensação',
        label: 'Compensações',
        menu: 'Compensações',
        exporterFileName: 'Compensacoes_exportadas',
        list: {
          menu: 'Compensações',
          title: 'Compensações',
        },
        create: {
          success: 'Compensação salva com sucesso',
        },
        update: {
          success: 'Compensação salva com sucesso',
        },
        destroy: {
          success: 'Compensação deletada com sucesso',
        },
        destroyAll: {
          success: 'Compensação(ões) deletada(s) com sucesso',
        },
        edit: {
          title: 'Editar Compensação',
        },
        fields: {
          id: 'Id',
          'person': 'Pessoa',
          'type': 'Tipo',
          'workAvailabilityRange': 'Horários disponíveis para trabalho',
          'workAvailability': 'Horários disponíveis para trabalho',
          'monetaryRange': 'Monetário',
          'monetary': 'Monetário',
          'paidTimeOffRange': 'Valor pago nas férias',
          'paidTimeOff': 'Valor pago nas férias',
          'otherBenefits': 'Outros Benefícios',
          'effectiveDateRange': 'Data da Contratação',
          'effectiveDate': 'Data da Contratação',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'type': {
            'hourly': 'Por Hora',
            'salaried': 'Salário Fixo Mensal',
          },
        },
        placeholders: {
          'type': 'Por Hora/Salário Fixo Mensal',
          'workAvailability': '40',
          'monetary': '00.00',
          'paidTimeOff': '0',
        },
        hints: {
          'type': 'Tipo de Compensação (por hora ou mensal)',
          'workAvailability': 'Quantas horas disponíveis por semana',
          'monetary': 'Valor recebido',
          'paidTimeOff': 'Valor recebido de férias',
          'otherBenefits': 'Quais outros benefícios são cobertos.',
          'effectiveDate': 'Dia de inicio da contratação',
        },
        new: {
          title: 'Nova Compensação',
        },
        view: {
          title: 'Visualizar Compensação',
        },
        importer: {
          title: 'Importar Compensações',
          fileName: 'compensacao_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    person: {
        name: 'Pessoa',
        label: 'Pessoas',
        menu: 'Pessoas',
        exporterFileName: 'Pessoa_exportadas',
        list: {
          menu: 'Pessoas',
          title: 'Pessoas',
        },
        create: {
          success: 'Pessoa salva com sucesso',
        },
        update: {
          success: 'Pessoa salva com sucesso',
        },
        destroy: {
          success: 'Pessoa deletada com sucesso',
        },
        destroyAll: {
          success: 'Pessoa(s) deletada(s) com sucesso',
        },
        edit: {
          title: 'Editar Pessoa',
        },
        fields: {
          id: 'Id',
          'fullName': 'Nome Completo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'fullName': 'Nome completo...',
        },
        hints: {
          'fullName': 'Nome completoPessoa.',
        },
        new: {
          title: 'Nova Pessoa',
        },
        view: {
          title: 'Visualizar Pessoa',
        },
        importer: {
          title: 'Importar Pessoas',
          fileName: 'pessoa_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    jobTitle: {
        name: 'Cargo',
        label: 'Cargos',
        menu: 'Cargos',
        exporterFileName: 'Cargos_exportados',
        list: {
          menu: 'Cargos',
          title: 'Cargos',
        },
        create: {
          success: 'Cargo salvo com sucesso',
        },
        update: {
          success: 'Cargo salvo com sucesso',
        },
        destroy: {
          success: 'Cargo deletado com sucesso',
        },
        destroyAll: {
          success: 'Cargo(s) deletado(s) com sucesso',
        },
        edit: {
          title: 'Editar Cargo',
        },
        fields: {
          id: 'Id',
          'person': 'Pessoa',
          'title': 'Título',
          'effectiveDateRange': 'Período da Contratação',
          'effectiveDate': 'Data da Contratação',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'title': 'Cargo da pessoa',
          'effectiveDate': 'Dia da cotratação.',
        },
        new: {
          title: 'Novo Cargo',
        },
        view: {
          title: 'Visualizar Cargo',
        },
        importer: {
          title: 'Importar Cargos',
          fileName: 'cargo_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    project: {
        name: 'Projeto',
        label: 'Projetos',
        menu: 'Projetos',
        exporterFileName: 'Projetos_exportados',
        list: {
          menu: 'Projetos',
          title: 'Projetos',
        },
        create: {
          success: 'Projeto salvo com sucesso',
        },
        update: {
          success: 'Projeto salvo com sucesso',
        },
        destroy: {
          success: 'Projeto deletado com sucesso',
        },
        destroyAll: {
          success: 'Projeto(s) deletado(s) com sucesso',
        },
        edit: {
          title: 'Editar Projeto',
        },
        fields: {
          id: 'Id',
          'projectId': 'Projeto ID',
          'name': 'Nome',
          'type': 'Tipo',
          'teamMembers': 'Membros do Time',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'type': {
            'managed-project': 'Managed-project',
            'non-managed-project': 'Non-managed-project',
            'team-augmentation': 'Team-augmentation',
          },
        },
        placeholders: {
          'projectId': 'Projeto Internal ID',
          'name': 'Nome do Projeto',
          'type': 'Tipo do Projeto',
        },
        hints: {
          'projectId': 'Id interno do projeto.',
          'name': 'O Nome do Projeto.',
          'type': 'O Tipo do pojeto.',
        },
        new: {
          title: 'Novo Projeto',
        },
        view: {
          title: 'Visualizar Projeto',
        },
        importer: {
          title: 'Importar Projetos',
          fileName: 'project_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    assignment: {
        name: 'Atribuição',
        label: 'Atribuições',
        menu: 'Atribuições',
        exporterFileName: 'Atribuicoes_exportadas',
        list: {
          menu: 'Atribuições',
          title: 'Atribuições',
        },
        create: {
          success: 'Atribuição salva com sucesso',
        },
        update: {
          success: 'Atribuição salva com sucesso',
        },
        destroy: {
          success: 'Atribuição deletada com sucesso',
        },
        destroyAll: {
          success: 'Atribuição(ões) deletada(s) com sucesso',
        },
        edit: {
          title: 'Editar Atribuição',
        },
        fields: {
          id: 'Id',
          'person': 'Pessoa',
          'project': 'Projeto',
          'hoursPerWeekRange': 'Horas Por Semana',
          'hoursPerWeek': 'Horas Por Semana',
          'startDateRange': 'Início',
          'startDate': 'Início',
          'endDateRange': 'Fim',
          'endDate': 'Fim',
          'role': 'Papel',
          'notes': 'Notas',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'role': {
            'project-manager': 'Gerente-de-Projeto',
            'technical-team-lead': 'Líder-Técnico',
            'lead-developer': 'Desenvolvedor-Líder',
            'developer': 'Desenvolvedor',
            'qa': 'QA',
            'designer': 'Designer',
          },
        },
        placeholders: {
          'person': 'Pessoa',
          'project': 'Projeto ID',
          'hoursPerWeek': 'Horas por semana',
          'notes': 'Notas adicionais...',
        },
        hints: {
          'person': 'Escolha uma pessoa para criar uma nova atribuição.',
          'project': 'Projeto em que deve ser atribuído.',
          'hoursPerWeek': 'Quantas horas por semana é esta atribuição.',
          'startDate': 'Data de início da atribuição.',
          'endDate': 'Data final da atribuição..',
          'role': 'Qual o papel da pessoa.',
          'notes': 'Notas adicionais.',
        },
        new: {
          title: 'Nova Atribuição',
        },
        view: {
          title: 'Visualizar Atribuição',
        },
        importer: {
          title: 'Importar Atribuições',
          fileName: 'atribuicoes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Gerente de Recursos',
      description: 'Acesso do gerenciador de recursos',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Foto',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome Completo',
      firstName: 'Primeiro Nome',
      lastName: 'Sobrenome',
      status: 'Status',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
    'Usuários deletado com sucesso',
    doDestroyAllSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',    
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    validation: {
      url:
        'A URL pode conter apenas letras minúsculas, números e traços (e deve iniciar com letra ou número).',
    },
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `O servidor levou {0} ms para gerar dados do painel.`,
    charts: {
      busy: 'Busy',
      idle: 'Idle',
      fullyBusy: 'Fully Busy',
      partlyIdle: 'Partly Idle',
      fullyIdle: 'Fully Idle',
      projectManager: 'Projeto Manager',
      technicalLead: 'Technical Lead',
      seniorDeveloper: 'Senior Developer',
      intermediateDeveloper: 'Intermediate Developer',
      juniorDeveloper: 'Junior Developer',
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Ops, ocorreu um erro.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      invalid: '${path} deve ser um número',
      type: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Itens por página:',
    nextPageLabel: 'Próxima',
    previousPageLabel: 'Anterior',
    firstPageLabel: 'Primeira página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Adicionar um segundo',
    downSecondLabel: 'Diminuir um segundo',
    upMinuteLabel: 'Adicionar um minuto',
    downMinuteLabel: 'Diminuir um minuto',
    upHourLabel: 'Adicionar uma hora',
    downHourLabel: 'Diminuir uma hora',
    prevMonthLabel: 'Mês anterior',
    nextMonthLabel: 'Mês seguinte',
    prevYearLabel: 'Ano anterior',
    nextYearLabel: 'Ano seguinte',
    prevMultiYearLabel: '21 anos anteriores',
    nextMultiYearLabel: '21 anos próximos',
    switchToMonthViewLabel: 'Alterar para visão mensal',
    switchToMultiYearViewLabel: 'Escolher mês e ano',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Confirmar',
    rangeFromLabel: 'De',
    rangeToLabel: 'Até',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'Não há dados',
    loading: 'Carregando...',
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
