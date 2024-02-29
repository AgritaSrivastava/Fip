using Aiml.NET;

// var bot = new Bot(".");
// load bot config files
// bot.LoadConfig();
// load bot aiml files
// bot.LoadAIML();

//var user = new User("User", bot);

Console.WriteLine("Please select your language:");
Console.WriteLine("1. English");
Console.WriteLine("2. Spanish");
Console.WriteLine("3. French");


int choice = int.Parse(Console.ReadLine());

switch (choice)
{
    case 1:
      
        var bot1 = new Bot("content/en");
       
        //bot.LoadConfig();
        bot1.LoadAIML();
        var user1 = new User("User", bot1);
        Console.WriteLine("You choosed English!");
        while (true)
        {
            Console.Write("> ");
            var message = Console.ReadLine();
            var response = bot1.Chat(new Request(message, user1, bot1), false);
            Console.WriteLine($"{bot1.Properties.GetValueOrDefault("name", "Robot")}: {response}");
        }
        break;
    case 2:
        Console.WriteLine("You choosed Spanish!");
        //load spanish aiml file

        var bot2 = new Bot("content/es");

        //bot.LoadConfig();
        bot2.LoadAIML();
        var user2 = new User("User", bot2);
        while (true)
        {
            Console.Write("> ");
            var message = Console.ReadLine();
            var response = bot2.Chat(new Request(message, user2, bot2), false);
            Console.WriteLine($"{bot2.Properties.GetValueOrDefault("name", "Robot")}: {response}");
        }
  
    case 3:
        Console.WriteLine("You choosed French!");
        //load french aiml file

        var bot3 = new Bot("content/fr");

        //bot.LoadConfig();
        bot3.LoadAIML();
        var user3 = new User("User", bot3);
        while (true)
        {
            Console.Write("> ");
            var message = Console.ReadLine();
            var response = bot3.Chat(new Request(message, user3, bot3), false);
            Console.WriteLine($"{bot3.Properties.GetValueOrDefault("name", "Robot")}: {response}");
        }
 
    default:
        Console.WriteLine("Invalid choice. Using English by default.");
        //load english aiml file
        var bot4 = new Bot("content/en");

        //bot.LoadConfig();
        bot4.LoadAIML();
        var user4 = new User("User", bot4);
        Console.WriteLine("You choosed English!");
        while (true)
        {
            Console.Write("> ");
            var message = Console.ReadLine();
            var response = bot4.Chat(new Request(message, user4, bot4), false);
            Console.WriteLine($"{bot4.Properties.GetValueOrDefault("name", "Robot")}: {response}");
        }
        
}

