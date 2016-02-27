using System.Resources;

namespace System.ResourcesExample
{
    class ResourceHelper
    {
        public static String getResource(String key)
        {
            ResourceManager resouceManager = new ResourceManager(typeof(ResourcesExample.Main));
            return resouceManager.GetString(key);
        }
    }
}
