# Test Cases — Hero Section

## Scenario: Hero section renders with correct headline
**Given**: The landing page is loaded
**When**: The user views the Hero section
**Then**: The headline text "AI Team. Không cần thuê dev." is visible

## Scenario: Hero section shows subheadline
**Given**: The landing page is loaded
**When**: The user views the Hero section
**Then**: A subheadline describing the value proposition (2–3 lines in Vietnamese) is visible below the headline

## Scenario: Primary CTA button is visible and links to Telegram
**Given**: The landing page is loaded
**When**: The user views the Hero section
**Then**: A primary CTA button labeled "Bắt đầu ngay" is visible and links to Telegram

## Scenario: Secondary CTA button is visible and scrolls to Pipeline
**Given**: The landing page is loaded
**When**: The user clicks the secondary CTA button labeled "Xem cách hoạt động"
**Then**: The page smooth-scrolls to the Pipeline section

## Scenario: Hero has dark background
**Given**: The landing page is loaded
**When**: The user inspects the Hero section
**Then**: The background color is dark (`#0B1120`) with a blue (`#3B82F6`) gradient accent element (e.g. glow/blur behind the headline)

## Scenario: Hero section is responsive on mobile
**Given**: The viewport is set to a mobile width (≤ 640px)
**When**: The user views the Hero section
**Then**: Content stacks vertically, both CTA buttons are full-width, and no horizontal scroll occurs
