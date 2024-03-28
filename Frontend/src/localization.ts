import { LocalizationLang } from './context/LocalizationContext';

export const enum LocalizationKey {
  SpeechRecognitionLang,
  AppName,
  AppDescription,
  WelcomeMessage,
  RoomsPageName,
  QuestionsPageName,
  UnauthorizedMessage,
  Page,
  LogOut,
  EditParticipants,
  Viewer,
  Viewers,
  Expert,
  Examinee,
  Save,
  CreateQuestion,
  QuestionText,
  Create,
  Error,
  QuestionCreatedSuccessfully,
  QuestionUpdatedSuccessfully,
  ShowClosedQuestions,
  SelectActiveQuestion,
  SendingActiveQuestion,
  CreatingRoomQuestion,
  LoadingRoom,
  ErrorLoadingRoom,
  LoadingRoomState,
  ErrorLoadingRoomState,
  RoomCreated,
  ErrorSendingActiveQuestion,
  ErrorCreatingRoomQuestion,
  ReactionsLoadingError,
  ErrorSendingReaction,
  GetRoomEvent,
  ErrorGetRoomEvent,
  ErrorSendingRoomEvent,
  TermsOfUsage,
  Login,
  LikeTable,
  DislikeTable,
  Like,
  Dislike,
  Question,
  ActiveQuestion,
  QuestionsSummary,
  FailedToCalculateMark,
  RoomAnayticsSummary,
  MarkNotCalculated,
  MarkWithPlus,
  MarkWithMinus,
  MarkAveragePrefix,
  MarkAverage,
  MarkPostfixCool,
  MarkPostfixAverage,
  MarkPostfixBad,
  MarkSmmary,
  CloseRoom,
  WaitingRoom,
  StartReviewRoom,
  CloseRoomModalTitle,
  StartReviewRoomModalTitle,
  CloseRoomLoading,
  Yes,
  No,
  RoomStatusNew,
  RoomStatusActive,
  RoomStatusReview,
  RoomStatusClose,
  Reviews,
  AddReview,
  AddReviewPlaceholder,
  Send,
  WithLove,
  TagsPlaceholder,
  TagsLoading,
  NoTags,
  SearchByTags,
  BuildHash,
  CreateRoom,
  RoomName,
  RoomTwitchChannel,
  RoomQuestions,
  RoomExperts,
  RoomExaminees,
  SearchByValue,
  Recognized,
  UserStreamError,
  ChatWelcomeMessage,
  ChatWelcomeMessageNickname,
  ChatMessagePlaceholder,
  SendToChat,
  SearchByName,
  ParticipatingRooms,
  ClosedRooms,
  ToRooms,
  Warning,
  CallRecording,
  VoiceRecognitionNotSupported,
  VoiceRecognition,
  ArchiveQuestion,
  ArchiveQuestionLoading,
  NoQuestionsSelector,
  Join,
  JoiningRoom,
  JoinAs,
  SetupDevices,
  Camera,
  Microphone,
  Settings,
  Chat,
  Exit,
  ChatTab,
  RecognitionTab,
  Theme,
  ThemeSystem,
  ThemeLight,
  ThemeDark,
  Language,
  FontSize,
  You,
  NoRecords,
  ConnectionError,
  RoomConnectionError,
  LocalizationLangEn,
  LocalizationLangRu,
};

export const LocalizationCaptions: Record<LocalizationLang, Record<LocalizationKey, string>> = {
  [LocalizationLang.en]: {
    [LocalizationKey.SpeechRecognitionLang]: 'en',
    [LocalizationKey.AppName]: 'Interview Platform',
    [LocalizationKey.AppDescription]: 'Interactive interview platform with the ability to generate detailed reports.',
    [LocalizationKey.WelcomeMessage]: 'Welcome',
    [LocalizationKey.RoomsPageName]: 'Meetings',
    [LocalizationKey.QuestionsPageName]: 'Questions',
    [LocalizationKey.UnauthorizedMessage]: 'Unauthorized',
    [LocalizationKey.Page]: 'Page',
    [LocalizationKey.LogOut]: 'Logout',
    [LocalizationKey.EditParticipants]: 'Edit',
    [LocalizationKey.Viewer]: 'Viewer',
    [LocalizationKey.Viewers]: 'Viewerss',
    [LocalizationKey.Expert]: 'Expert',
    [LocalizationKey.Examinee]: 'Examinee',
    [LocalizationKey.Save]: 'Save',
    [LocalizationKey.CreateQuestion]: 'Create question',
    [LocalizationKey.QuestionText]: 'Text',
    [LocalizationKey.Create]: 'Create',
    [LocalizationKey.Error]: 'Error',
    [LocalizationKey.QuestionCreatedSuccessfully]: 'Question created successfully',
    [LocalizationKey.QuestionUpdatedSuccessfully]: 'Question updated successfully',
    [LocalizationKey.ShowClosedQuestions]: 'Show closed questions',
    [LocalizationKey.SelectActiveQuestion]: 'Select current question',
    [LocalizationKey.SendingActiveQuestion]: 'Sending current question',
    [LocalizationKey.CreatingRoomQuestion]: 'Creating current question',
    [LocalizationKey.LoadingRoom]: 'Loading meeting',
    [LocalizationKey.ErrorLoadingRoom]: 'Error loading meeting',
    [LocalizationKey.LoadingRoomState]: 'Loading meeting state',
    [LocalizationKey.ErrorLoadingRoomState]: 'Error loading meeting state',
    [LocalizationKey.RoomCreated]: 'Meeting created',
    [LocalizationKey.ErrorSendingActiveQuestion]: 'Error sending current question',
    [LocalizationKey.ErrorCreatingRoomQuestion]: 'Error creating question',
    [LocalizationKey.ReactionsLoadingError]: 'Reactions loading error',
    [LocalizationKey.ErrorSendingReaction]: 'Error sending reaction',
    [LocalizationKey.GetRoomEvent]: 'Receiving meeting event',
    [LocalizationKey.ErrorGetRoomEvent]: 'Error receiving meeting event',
    [LocalizationKey.ErrorSendingRoomEvent]: 'Error sending meeting event',
    [LocalizationKey.TermsOfUsage]: 'Terms of usage',
    [LocalizationKey.Login]: 'Login',
    [LocalizationKey.LikeTable]: '👍',
    [LocalizationKey.DislikeTable]: '👎',
    [LocalizationKey.Like]: 'Like',
    [LocalizationKey.Dislike]: 'Dislike',
    [LocalizationKey.Question]: 'Question',
    [LocalizationKey.ActiveQuestion]: 'Current question',
    [LocalizationKey.QuestionsSummary]: 'Questions summary',
    [LocalizationKey.FailedToCalculateMark]: 'Failed to calculate mark',
    [LocalizationKey.RoomAnayticsSummary]: 'Meeting anaytics',
    [LocalizationKey.MarkNotCalculated]: 'Mark not calculated',
    [LocalizationKey.MarkWithPlus]: 'with plus',
    [LocalizationKey.MarkWithMinus]: 'witn minus',
    [LocalizationKey.MarkAveragePrefix]: 'Clear',
    [LocalizationKey.MarkAverage]: 'average',
    [LocalizationKey.MarkPostfixCool]: 'Cool.',
    [LocalizationKey.MarkPostfixAverage]: 'Average.',
    [LocalizationKey.MarkPostfixBad]: 'Bad.',
    [LocalizationKey.MarkSmmary]: 'Mark smmary',
    [LocalizationKey.CloseRoom]: 'Close meeting',
    [LocalizationKey.WaitingRoom]: 'Waiting to start.',
    [LocalizationKey.StartReviewRoom]: 'Start meeting review. 📔',
    [LocalizationKey.CloseRoomModalTitle]: 'Do you really want to close meeting?',
    [LocalizationKey.StartReviewRoomModalTitle]: 'Start filling out meeting report?',
    [LocalizationKey.CloseRoomLoading]: 'Closing meeting',
    [LocalizationKey.Yes]: 'Yes ✔️',
    [LocalizationKey.No]: 'No ❌',
    [LocalizationKey.RoomStatusNew]: 'New',
    [LocalizationKey.RoomStatusActive]: 'Active',
    [LocalizationKey.RoomStatusReview]: 'Review',
    [LocalizationKey.RoomStatusClose]: 'Close',
    [LocalizationKey.Reviews]: 'Reviews',
    [LocalizationKey.AddReview]: 'Add review',
    [LocalizationKey.AddReviewPlaceholder]: 'Write a review here',
    [LocalizationKey.Send]: 'Send',
    [LocalizationKey.WithLove]: 'WithLove',
    [LocalizationKey.TagsPlaceholder]: 'Select tags',
    [LocalizationKey.TagsLoading]: 'Loading tags',
    [LocalizationKey.NoTags]: 'No tags',
    [LocalizationKey.SearchByTags]: 'Search by tags',
    [LocalizationKey.BuildHash]: 'Build',
    [LocalizationKey.CreateRoom]: 'Create meeting',
    [LocalizationKey.RoomName]: 'Meeting name',
    [LocalizationKey.RoomTwitchChannel]: 'Twitch channel',
    [LocalizationKey.RoomQuestions]: 'questions',
    [LocalizationKey.RoomExperts]: 'Experts',
    [LocalizationKey.RoomExaminees]: 'Examinees',
    [LocalizationKey.SearchByValue]: 'Search by value',
    [LocalizationKey.Recognized]: '🗣️',
    [LocalizationKey.UserStreamError]: 'Unable to access camera and microphone',
    [LocalizationKey.ChatWelcomeMessage]: 'Welcome to chat',
    [LocalizationKey.ChatWelcomeMessageNickname]: 'System',
    [LocalizationKey.ChatMessagePlaceholder]: 'Write to chat',
    [LocalizationKey.SendToChat]: 'Send',
    [LocalizationKey.SearchByName]: 'Search by name',
    [LocalizationKey.ParticipatingRooms]: 'I\'m participating',
    [LocalizationKey.ClosedRooms]: 'Closed',
    [LocalizationKey.ToRooms]: 'Go to meetings',
    [LocalizationKey.Warning]: 'WARNING!',
    [LocalizationKey.CallRecording]: 'The conversation is being recorded',
    [LocalizationKey.VoiceRecognitionNotSupported]: 'Voice recognition is not supported by your browser',
    [LocalizationKey.VoiceRecognition]: 'Transcription',
    [LocalizationKey.ArchiveQuestion]: 'Archive question?',
    [LocalizationKey.ArchiveQuestionLoading]: 'Archiving question...',
    [LocalizationKey.NoQuestionsSelector]: 'No questions available',
    [LocalizationKey.Join]: 'Join',
    [LocalizationKey.JoiningRoom]: 'Joining meeting',
    [LocalizationKey.JoinAs]: 'Join as',
    [LocalizationKey.SetupDevices]: 'Set up camera and microphone',
    [LocalizationKey.Camera]: 'Camera',
    [LocalizationKey.Microphone]: 'Mic',
    [LocalizationKey.Settings]: 'Settings',
    [LocalizationKey.Chat]: 'Chat',
    [LocalizationKey.Exit]: 'Leave',
    [LocalizationKey.ChatTab]: 'Chat',
    [LocalizationKey.RecognitionTab]: 'Transcription',
    [LocalizationKey.Theme]: 'Theme',
    [LocalizationKey.ThemeSystem]: 'System',
    [LocalizationKey.ThemeLight]: 'Light',
    [LocalizationKey.ThemeDark]: 'Dark',
    [LocalizationKey.Language]: 'Language',
    [LocalizationKey.FontSize]: 'FontSize',
    [LocalizationKey.You]: 'You',
    [LocalizationKey.NoRecords]: 'No records',
    [LocalizationKey.ConnectionError]: 'Connection error',
    [LocalizationKey.RoomConnectionError]: 'Connection to the room has been lost',
    [LocalizationKey.LocalizationLangEn]: 'English',
    [LocalizationKey.LocalizationLangRu]: 'Русский',
  },
  [LocalizationLang.ru]: {
    [LocalizationKey.SpeechRecognitionLang]: 'ru',
    [LocalizationKey.AppName]: 'Interview Platform',
    [LocalizationKey.AppDescription]: 'Интерактивная платформа для проведения собеседований с возможностью составления детальных отчётов.',
    [LocalizationKey.WelcomeMessage]: 'Добро пожаловать',
    [LocalizationKey.RoomsPageName]: 'Встречи',
    [LocalizationKey.QuestionsPageName]: 'Вопросы',
    [LocalizationKey.UnauthorizedMessage]: 'Неавторизован',
    [LocalizationKey.Page]: 'Страница',
    [LocalizationKey.LogOut]: 'Выйти',
    [LocalizationKey.EditParticipants]: 'Редактировать',
    [LocalizationKey.Viewer]: 'Зритель',
    [LocalizationKey.Viewers]: 'Зрители',
    [LocalizationKey.Expert]: 'Собеседующий',
    [LocalizationKey.Examinee]: 'Собеседуемый',
    [LocalizationKey.Save]: 'Сохранить',
    [LocalizationKey.CreateQuestion]: 'Создать вопрос',
    [LocalizationKey.QuestionText]: 'Текст вопроса',
    [LocalizationKey.Create]: 'Создать',
    [LocalizationKey.Error]: 'Ошибка',
    [LocalizationKey.QuestionCreatedSuccessfully]: 'Вопрос успешно создан',
    [LocalizationKey.QuestionUpdatedSuccessfully]: 'Вопрос успешно обновлён',
    [LocalizationKey.ShowClosedQuestions]: 'Показывать закрытые вопросы',
    [LocalizationKey.SelectActiveQuestion]: 'Установить текущий вопрос',
    [LocalizationKey.SendingActiveQuestion]: 'Установка вопроса',
    [LocalizationKey.CreatingRoomQuestion]: 'Создание текущего вопроса',
    [LocalizationKey.LoadingRoom]: 'Загрузка встречи',
    [LocalizationKey.ErrorLoadingRoom]: 'Ошибка загрузки встречи',
    [LocalizationKey.LoadingRoomState]: 'Загрузка состояния встречи',
    [LocalizationKey.ErrorLoadingRoomState]: 'Ошибка загрузки состояния встречи',
    [LocalizationKey.RoomCreated]: 'Встреча успешно создана',
    [LocalizationKey.ErrorSendingActiveQuestion]: 'Ошибка в установке вопроса',
    [LocalizationKey.ErrorCreatingRoomQuestion]: 'Ошибка создания текущего вопроса',
    [LocalizationKey.ReactionsLoadingError]: 'Ошибка загрузки реакций',
    [LocalizationKey.ErrorSendingReaction]: 'Ошибка в отправке реакции',
    [LocalizationKey.GetRoomEvent]: 'Получение событий',
    [LocalizationKey.ErrorGetRoomEvent]: 'Ошибка в получении событий',
    [LocalizationKey.ErrorSendingRoomEvent]: 'Ошибка в отправке собтия',
    [LocalizationKey.TermsOfUsage]: 'Условия использования',
    [LocalizationKey.Login]: 'Войти',
    [LocalizationKey.LikeTable]: '👍',
    [LocalizationKey.DislikeTable]: '👎',
    [LocalizationKey.Like]: 'Хорошо',
    [LocalizationKey.Dislike]: 'Плохо',
    [LocalizationKey.Question]: 'Вопрос',
    [LocalizationKey.ActiveQuestion]: 'Текущий вопрос',
    [LocalizationKey.QuestionsSummary]: 'Отчёт по воросам',
    [LocalizationKey.FailedToCalculateMark]: 'Ошибка при подсчёте оценки',
    [LocalizationKey.RoomAnayticsSummary]: 'Анадитика по встрече',
    [LocalizationKey.MarkNotCalculated]: 'Оценка не рассчитана',
    [LocalizationKey.MarkWithPlus]: 'с плюсом',
    [LocalizationKey.MarkWithMinus]: 'с минусом',
    [LocalizationKey.MarkAveragePrefix]: 'Средне',
    [LocalizationKey.MarkAverage]: 'средне',
    [LocalizationKey.MarkPostfixCool]: 'Круто.',
    [LocalizationKey.MarkPostfixAverage]: 'Средне.',
    [LocalizationKey.MarkPostfixBad]: 'Плохо.',
    [LocalizationKey.MarkSmmary]: 'Итог',
    [LocalizationKey.CloseRoom]: 'Закрыть встречу',
    [LocalizationKey.WaitingRoom]: 'Ожидание начала встречи',
    [LocalizationKey.StartReviewRoom]: 'Начать разбор встречи',
    [LocalizationKey.CloseRoomModalTitle]: 'Действительно хотите закрыть встречу?',
    [LocalizationKey.StartReviewRoomModalTitle]: 'Начать заполнение отчёта по встрече?',
    [LocalizationKey.CloseRoomLoading]: 'Закрытие встречи',
    [LocalizationKey.Yes]: 'Да ✔️',
    [LocalizationKey.No]: 'Нет ❌',
    [LocalizationKey.RoomStatusNew]: 'Новая',
    [LocalizationKey.RoomStatusActive]: 'Идёт встреча',
    [LocalizationKey.RoomStatusReview]: 'Разбор',
    [LocalizationKey.RoomStatusClose]: 'Закрыта',
    [LocalizationKey.Reviews]: 'Отзывы',
    [LocalizationKey.AddReview]: 'Написать отзыв',
    [LocalizationKey.AddReviewPlaceholder]: 'Написать отзыв',
    [LocalizationKey.Send]: 'Отправить',
    [LocalizationKey.WithLove]: 'С любовью',
    [LocalizationKey.TagsPlaceholder]: 'Выбрать тэги',
    [LocalizationKey.TagsLoading]: 'Загрузка тэгов',
    [LocalizationKey.NoTags]: 'Тэги отсутствуют',
    [LocalizationKey.SearchByTags]: 'Поиск по тэгам',
    [LocalizationKey.BuildHash]: 'Сборка',
    [LocalizationKey.CreateRoom]: 'Создание встречи',
    [LocalizationKey.RoomName]: 'Имя встречи',
    [LocalizationKey.RoomTwitchChannel]: 'Twitch канал',
    [LocalizationKey.RoomQuestions]: 'Вопросы',
    [LocalizationKey.RoomExperts]: 'Собеседующие',
    [LocalizationKey.RoomExaminees]: 'Собеседуемые',
    [LocalizationKey.SearchByValue]: 'Поиск по содержимому',
    [LocalizationKey.Recognized]: '🗣️',
    [LocalizationKey.UserStreamError]: 'Не удалось получить доступ к камере и микрофону',
    [LocalizationKey.ChatWelcomeMessage]: 'Добро пожаловать',
    [LocalizationKey.ChatWelcomeMessageNickname]: 'Система',
    [LocalizationKey.ChatMessagePlaceholder]: 'Написать в чат',
    [LocalizationKey.SendToChat]: 'Чат',
    [LocalizationKey.SearchByName]: 'Поиск по имени',
    [LocalizationKey.ParticipatingRooms]: 'Я участвую',
    [LocalizationKey.ClosedRooms]: 'Закрытые',
    [LocalizationKey.ToRooms]: 'Перейти ко встречам',
    [LocalizationKey.Warning]: 'ВНИМАНИЕ!',
    [LocalizationKey.CallRecording]: 'Разговор записыватеся',
    [LocalizationKey.VoiceRecognitionNotSupported]: 'Распознавание голоса не поддерживается вашим браузером',
    [LocalizationKey.VoiceRecognition]: 'Транскрипция',
    [LocalizationKey.ArchiveQuestion]: 'Архивировать вопрос?',
    [LocalizationKey.ArchiveQuestionLoading]: 'Ахивирование вопроса...',
    [LocalizationKey.NoQuestionsSelector]: 'Нет доступных вопросов',
    [LocalizationKey.Join]: 'Присоединиться',
    [LocalizationKey.JoiningRoom]: 'Подключение ко встрече',
    [LocalizationKey.JoinAs]: 'Подключиться как',
    [LocalizationKey.SetupDevices]: 'Настроить камеру и микрофон',
    [LocalizationKey.Camera]: 'Камера',
    [LocalizationKey.Microphone]: 'Аудио',
    [LocalizationKey.Settings]: 'Настройки',
    [LocalizationKey.Chat]: 'Чат',
    [LocalizationKey.Exit]: 'Выйти',
    [LocalizationKey.ChatTab]: 'Чат',
    [LocalizationKey.RecognitionTab]: 'Транскрипция',
    [LocalizationKey.Theme]: 'Тема оформления',
    [LocalizationKey.ThemeSystem]: 'Системная',
    [LocalizationKey.ThemeLight]: 'Светлая',
    [LocalizationKey.ThemeDark]: 'Тёмная',
    [LocalizationKey.Language]: 'Язык',
    [LocalizationKey.FontSize]: 'Размер шрифта',
    [LocalizationKey.You]: 'Вы',
    [LocalizationKey.NoRecords]: 'Нет записей',
    [LocalizationKey.ConnectionError]: 'Ошибка подключения',
    [LocalizationKey.RoomConnectionError]: 'Соединение с комнатой потеряно',
    [LocalizationKey.LocalizationLangEn]: 'English',
    [LocalizationKey.LocalizationLangRu]: 'Русский',
  },
}
