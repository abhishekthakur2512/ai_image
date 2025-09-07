# Celebrity Image App

A React Native app built with Expo for iOS and Android platforms.

## Prerequisites

- Node.js 18+ (currently using v22.19.0)
- npm or yarn
- Expo CLI
- EAS CLI (for building and deployment)
- iOS: Xcode (for iOS development)
- Android: Android Studio (for Android development)

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

This will open the Expo DevTools in your browser. You can then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Scan the QR code with Expo Go app on your physical device

### 3. Platform-Specific Development
```bash
# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Building for Production

### Setup EAS (Expo Application Services)

1. **Create an Expo account** at [expo.dev](https://expo.dev)

2. **Login to EAS CLI**
   ```bash
   eas login
   ```

3. **Configure your project**
   ```bash
   eas build:configure
   ```

4. **Update app.json** - Replace `your-project-id-here` with your actual project ID from Expo dashboard

5. **Update bundle identifiers** in `app.json`:
   - iOS: `bundleIdentifier` (e.g., `com.yourcompany.celebimage`)
   - Android: `package` (e.g., `com.yourcompany.celebimage`)

### Building

#### Development Build
```bash
eas build --profile development
```

#### Preview Build (for testing)
```bash
eas build --profile preview
```

#### Production Build
```bash
# Build for both platforms
eas build --profile production

# Build for specific platform
eas build --profile production --platform ios
eas build --profile production --platform android
```

## App Store Deployment

### iOS App Store

1. **Build production iOS app**
   ```bash
   eas build --profile production --platform ios
   ```

2. **Submit to App Store**
   ```bash
   eas submit --platform ios
   ```

### Google Play Store

1. **Build production Android app**
   ```bash
   eas build --profile production --platform android
   ```

2. **Submit to Google Play**
   ```bash
   eas submit --platform android
   ```

## Project Structure

```
├── App.js                 # Main app component
├── app.json              # Expo configuration
├── eas.json              # EAS build configuration
├── package.json          # Dependencies and scripts
├── assets/               # App icons, splash screens, images
├── node_modules/         # Dependencies (auto-generated)
└── .expo/               # Expo cache (auto-generated)
```

## Configuration Notes

### Permissions
The app is pre-configured with common permissions:
- **iOS**: Camera and Photo Library access
- **Android**: Camera, Read/Write External Storage

### Bundle Identifiers
- **iOS**: `com.yourcompany.celebimage`
- **Android**: `com.yourcompany.celebimage`

**Important**: Change these to your own unique bundle identifiers before publishing!

### Version Management
- **iOS**: Uses `buildNumber` for version incrementing
- **Android**: Uses `versionCode` for version incrementing

## Development Tips

1. **Use Expo Go app** for quick testing on physical devices
2. **Use simulators/emulators** for more comprehensive testing
3. **Test on both platforms** regularly during development
4. **Use EAS Build** for creating production-ready builds
5. **Keep your bundle identifiers unique** to avoid conflicts

## Useful Commands

```bash
# Clear Expo cache
expo start --clear

# Check for updates
expo install --fix

# View build logs
eas build:list

# View submission status
eas submit:list
```

## Next Steps

1. Replace placeholder bundle identifiers with your own
2. Update app icons and splash screen in the `assets/` folder
3. Set up your Expo account and get a project ID
4. Start building your app features!

## Support

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [EAS Documentation](https://docs.expo.dev/eas/) 