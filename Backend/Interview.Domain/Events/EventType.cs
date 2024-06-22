namespace Interview.Domain.Events;

/// <summary>
/// Event types.
/// </summary>
public class EventType
{
    /// <summary>
    /// Unknown value.
    /// </summary>
    public static readonly string Unknown = "Unknown";

    /// <summary>
    /// The event is triggered during a user reaction (like).
    /// </summary>
    public static readonly string Like = "Like";

    /// <summary>
    /// The event is triggered during a user reaction (dislike).
    /// </summary>
    public static readonly string Dislike = "Dislike";

    /// <summary>
    /// The event is triggered when a new message appears in twitch or in app chat.
    /// </summary>
    public static readonly string ChatMessage = "ChatMessage";

    /// <summary>
    /// The event is triggered when question is changed.
    /// </summary>
    public static readonly string ChangeQuestion = "ChangeQuestion";

    /// <summary>
    /// The event is triggered when room question state is changed.
    /// </summary>
    public static readonly string ChangeRoomQuestionState = "ChangeRoomQuestionState";

    /// <summary>
    /// The event is triggered when room question is created.
    /// </summary>
    public static readonly string AddRoomQuestion = "AddRoomQuestion";

    /// <summary>
    /// The event is triggered when change code editor for room.
    /// </summary>
    public static readonly string ChangeCodeEditor = "ChangeCodeEditor";

    /// <summary>
    /// The event is triggered when room status is changed.
    /// </summary>
    public static readonly string ChangeRoomStatus = "ChangeRoomStatus";

    /// <summary>
    /// The event is sent when the speech from the video is recognized.
    /// </summary>
    public static readonly string VoiceRecognition = "VoiceRecognition";

    /// <summary>
    /// The event is sent when the room timer started.
    /// </summary>
    public static readonly string StartRoomTimer = "StartRoomTimer";
}
